import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { Context, db, Job } from "../core";
import { JobType } from "../types";

/**
 * @example
 *   query {
 *     job(id: "my-job-id") {
 *       verb
 *       object
 *       context
 *     }
 *   }
 */
export const job: GraphQLFieldConfig<User, Context> = {
  description: "Fetches a job by id.",
  type: JobType,

  args: {
    id: { type: GraphQLString },
  },

  resolve(self, args) {
    const query = db.table<Job>("job");

    if (args.id) {
      return query.where("id", "=", args.id).first();
    } else {
      throw new Error("The id argument is required.");
    }
  },
};
