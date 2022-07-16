import {
  GraphQLBoolean,
  GraphQLFieldConfig,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { BadRequest } from "http-errors";
import { Context, db } from "../core";
import { JobType } from "../types";
import { fromGlobalId, validate, ValidationError } from "../utils";

type UpdateJobInput = {
  id: string;
  verb?: string | null;
  object?: string | null;
  context?: string | null;
};

/**
 * @example
 *   mutation {
 *     updateJob(input: { id: "xxx", verb: "drink" }, dryRun: false) {
 *       job {
 *         id
 *         verb
 *       }
 *     }
 *   }
 */
export const updateJob: GraphQLFieldConfig<unknown, Context> = {
  description: "Updates the job with the given ID.",

  type: new GraphQLObjectType({
    name: "UpdateJobPayload",
    fields: {
      job: { type: JobType },
    },
  }),

  args: {
    input: {
      type: new GraphQLInputObjectType({
        name: "UpdateJobInput",
        fields: {
          id: { type: new GraphQLNonNull(GraphQLID) },
          verb: { type: GraphQLString },
          object: { type: GraphQLString },
          context: { type: GraphQLString },
        },
      }),
    },
    dryRun: { type: new GraphQLNonNull(GraphQLBoolean), defaultValue: false },
  },

  async resolve(self, args, ctx) {
    const input = args.input as UpdateJobInput;
    const dryRun = args.dryRun as boolean;
    //const id = input.id;
    const id = fromGlobalId(input.id, "Job");

    // Validate and sanitize job input
    const [data, errors] = validate(input, (value) => ({
      verb: value("verb").isLength({ max: 100 }),
      object: value("object").isLength({ max: 100 }),
      context: value("context").isLength({ max: 250 }),
    }));

    if (Object.keys(errors).length > 0) {
      throw new ValidationError(errors);
    }

    if (Object.keys(data).length === 0) {
      throw new BadRequest("The input cannot be empty.");
    }

    if (dryRun) {
      return { job: await ctx.jobById.load(id) };
    }

    const [job] = await db
      .table("job")
      .where({ id })
      .update({ ...data, updated: db.fn.now() })
      .returning("*");

    return { job };
  },
};
