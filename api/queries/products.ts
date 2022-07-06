import { GraphQLFieldConfig } from "graphql";
import {
  connectionFromArraySlice,
  cursorToOffset,
  forwardConnectionArgs,
} from "graphql-relay";
import { Context, db, Product } from "../core";
import { ProductConnection } from "../types";

/**
 * @example
 *   query {
 *     products(first: 10) {
 *       edges {
 *         product: node {
 *           id
 *           name
 *         }
 *       }
 *     }
 *   }
 */

export const products: GraphQLFieldConfig<unknown, Context> = {
  description: "Fetches products.",
  type: ProductConnection,
  args: forwardConnectionArgs,

  async resolve(root, args) {
    const limit = args.first === undefined ? 50 : args.first;
    const offset = args.after ? cursorToOffset(args.after) + 1 : 0;

    const query = db.table<Product>("product");

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
