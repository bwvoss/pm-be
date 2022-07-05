import { GraphQLNonNull, GraphQLObjectType, GraphQLString } from "graphql";
import { connectionDefinitions, globalIdField } from "graphql-relay";
import { Context, Product } from "../core";
import { countField, dateField } from "./fields";
import { nodeInterface } from "./node";

export const ProductType = new GraphQLObjectType<Product, Context>({
  name: "Product",
  description: "A product that research happens within.",
  interfaces: [nodeInterface],

  fields: {
    id: globalIdField(),

    name: {
      type: new GraphQLNonNull(GraphQLString),
    },

    created: dateField((self) => self.created),
    updated: dateField((self) => self.updated),
  },
});

const connection = connectionDefinitions({
  name: "Product",
  nodeType: ProductType,
  connectionFields: { totalCount: countField },
});

export const ProductConnection = connection.connectionType;
export const ProductEdge = connection.edgeType;
