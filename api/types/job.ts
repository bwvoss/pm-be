import {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from "graphql";
import { globalIdField } from "graphql-relay";
import { Job } from "../core";
import { OutcomeType } from "./outcome";
import { dateField } from "./fields";

export const JobType = new GraphQLObjectType<Job>({
  name: "Job",
  description: "The Job To Be Done.",

  fields: {
    id: globalIdField(),

    verb: {
      type: new GraphQLNonNull(GraphQLString),
    },

    object: {
      type: new GraphQLNonNull(GraphQLString),
    },

    context: {
      type: GraphQLString,
    },

    outcomes: {
      type: new GraphQLList(new GraphQLNonNull(OutcomeType)),
      resolve(self, args, ctx) {
        return ctx.outcomesByJobId.load(self.id);
      },
    },

    created: dateField((self) => self.created),
    updated: dateField((self) => self.updated),
  },
});
