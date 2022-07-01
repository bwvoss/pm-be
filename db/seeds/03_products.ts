import { Knex } from "knex";

export async function seed(db: Knex) {
  const { default: records } = await import("./products.json");

  if (records.length > 0) {
    await db.table("product").insert(records).onConflict("id").ignore();
  }
}
