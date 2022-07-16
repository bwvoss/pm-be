import {
  GraphQLNonNull,
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
} from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context, Interview } from "../core";
import { JobType } from "./job";
import { countField, dateField } from "./fields";
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

const connection = connectionDefinitions({
  name: "Interview",
  nodeType: InterviewType,
  connectionFields: { totalCount: countField },
});

export const InterviewConnection = connection.connectionType;
export const InterviewEdge = connection.edgeType;
