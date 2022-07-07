import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { globalIdField } from "graphql-relay";
import { Context, Interview } from "../core";
import { JobType } from "./job";
import { dateField } from "./fields";
import { nodeInterface } from "./node";

export const InterviewType = new GraphQLObjectType<Interview, Context>({
  name: "Interview",
  description: "An interview done for research.",
  interfaces: [nodeInterface],

  fields: {
    id: globalIdField(),

    interviewee_name: {
      type: new GraphQLNonNull(GraphQLString),
    },

    jobs: {
      type: new GraphQLList(new GraphQLNonNull(JobType)),
      resolve(self, args, ctx) {
        return ctx.jobsByInterviewId.load(self.id);
      },
    },

    created: dateField((self) => self.created),
    updated: dateField((self) => self.updated),
  },
});
