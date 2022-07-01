import { Knex } from "knex";

export async function seed(db: Knex) {
  const { default: records } = await import("./jobs.json");

  if (records.length > 0) {
    await db.table("job").insert(records).onConflict("id").ignore();
  }
}
