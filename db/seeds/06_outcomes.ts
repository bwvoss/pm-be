import { Knex } from "knex";

export async function seed(db: Knex) {
  const { default: records } = await import("./outcomes.json");

  if (records.length > 0) {
    await db.table("outcome").insert(records).onConflict("id").ignore();
  }
}
