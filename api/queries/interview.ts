import { GraphQLFieldConfig, GraphQLString } from "graphql";
import { Context, db, Interview } from "../core";
import { InterviewType } from "../types";
import { fromGlobalId } from "../utils";

/**
 * @example
 *   query {
 *     interview(id: "my-interview-id") {
 *       interviewee_name
 *       jobs
 *     }
 *   }
 */
export const interview: GraphQLFieldConfig<User, Context> = {
  description: "Fetches an interview by global id.",
  type: InterviewType,

  args: {
    id: { type: GraphQLString },
  },

  resolve(self, args) {
    const query = db.table<Interview>("interview");

    if (args.id) {
      const id = fromGlobalId(args.id, "Interview");
      console.log(id);
      return query.where("id", "=", id).first();
    } else {
      throw new Error("The id (Global) argument is required.");
    }
  },
};
