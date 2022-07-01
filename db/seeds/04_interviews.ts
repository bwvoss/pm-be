import { Knex } from "knex";

export async function seed(db: Knex) {
  const { default: records } = await import("./interviews.json");

  if (records.length > 0) {
    await db.table("interview").insert(records).onConflict("id").ignore();
  }
}
