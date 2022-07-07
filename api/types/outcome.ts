import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { globalIdField } from "graphql-relay";
import { Outcome } from "../core";
import { dateField } from "./fields";

export const OutcomeType = new GraphQLObjectType<Outcome>({
  name: "Outcome",
  description: "The measurable outcome of a job.",

  fields: {
    id: globalIdField(),

    direction: {
      type: new GraphQLNonNull(GraphQLString),
    },

    metric: {
      type: new GraphQLNonNull(GraphQLString),
    },

    object: {
      type: new GraphQLNonNull(GraphQLString),
    },

    context: {
      type: GraphQLString,
    },

    created: dateField((self) => self.created),
    updated: dateField((self) => self.updated),
  },
});
