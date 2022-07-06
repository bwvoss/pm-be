import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { Context, db, Interview } from "../core";
import { InterviewType } from "../types";

/**
 * @example
 *   query {
 *     interview(id: "my-interview-id") {
 *       interviewee_name
 *     }
 *   }
 */
export const interview: GraphQLFieldConfig<User, Context> = {
  description: "Fetches an interview by id.",
  type: InterviewType,

  args: {
    id: { type: GraphQLString },
  },

  resolve(self, args) {
    const query = db.table<Interview>("interview");

    if (args.id) {
      return query.where("id", "=", args.id).first();
    } else {
      throw new Error("The id argument is required.");
    }
  },
};
