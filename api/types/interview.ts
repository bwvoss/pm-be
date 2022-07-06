import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";
import { Context, Interview } from "../core";
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

    created: dateField((self) => self.created),
    updated: dateField((self) => self.updated),
  },
});
