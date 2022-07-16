import { GraphQLFieldConfig } from "graphql";
import {
  connectionFromArraySlice,
  cursorToOffset,
  forwardConnectionArgs,
} from "graphql-relay";
import { Context, db, Interview } from "../core";
import { InterviewConnection } from "../types";

/**
 * @example
 *   query {
 *     interviews(first: 10) {
 *       edges {
 *         interview: node {
 *           id
 *           interviewee_name
 *         }
 *       }
 *     }
 *   }
 */

export const interviews: GraphQLFieldConfig<unknown, Context> = {
  description: "Fetches interviews.",
  type: InterviewConnection,
  args: forwardConnectionArgs,

  async resolve(root, args) {
    const limit = args.first === undefined ? 50 : args.first;
    const offset = args.after ? cursorToOffset(args.after) + 1 : 0;

    const query = db.table<Interview>("interview");

    const data = await query
      .clone()
      .limit(limit)
      .offset(offset)
      .orderBy("created", "desc")
      .select();

    return {
      ...connectionFromArraySlice(data, args, {
        sliceStart: offset,
        arrayLength: offset + data.length,
      }),
      query,
    };
  },
};
