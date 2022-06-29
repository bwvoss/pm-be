import { Knex } from "knex";

/**
 * The initial database schema (migration).
 * @see https://knexjs.org/#Schema
 */
export async function up(db: Knex) {
  // create specific words for outcome directions
  const outcomeDirections = ["increase", "minimize"];
  await db.raw(`CREATE TYPE outcome_direction AS ENUM (${outcomeDirections.map((x) => `'${x}'`).join(", ")})`); // prettier-ignore

  await db.schema.createTable("product", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table.string("name", 100); // Name of Product

    table.timestamp("created").notNullable().defaultTo(db.fn.now()).index();
    table.timestamp("updated").notNullable().defaultTo(db.fn.now());
    table.timestamp("deleted");
  });

  await db.schema.createTable("interview", (table) => {
    table.specificType("id", "short_id").notNullable().primary();
    table.string("interviewee_name", 50); // Name of Interviewee

    table
      .specificType("product_id", "short_id")
      .notNullable()
      .references("product.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE"); // TODO: why is onUpdate needed?

    table.timestamp("created").notNullable().defaultTo(db.fn.now()).index();
    table.timestamp("updated").notNullable().defaultTo(db.fn.now());
    table.timestamp("deleted");
  });

  await db.schema.createTable("job", (table) => {
    table.specificType("id", "short_id").notNullable().primary();

    // Length may have to be altered; mainly want to have a limit, just not sure what limit
    table.string("verb", 50);
    table.string("object", 100);
    table.text("context", 500);

    table
      .specificType("interview_id", "short_id")
      .notNullable()
      .references("interview.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.timestamp("created").notNullable().defaultTo(db.fn.now()).index();
    table.timestamp("updated").notNullable().defaultTo(db.fn.now());
    table.timestamp("deleted");
  });

  await db.schema.createTable("outcome", (table) => {
    table.specificType("id", "short_id").notNullable().primary();

    table.specificType("direction", "outcome_direction").notNullable().index();

    table.string("metric", 50);
    table.string("object", 100);
    table.text("context", 500);

    table
      .specificType("job_id", "short_id")
      .notNullable()
      .references("job.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.timestamp("created").notNullable().defaultTo(db.fn.now()).index();
    table.timestamp("updated").notNullable().defaultTo(db.fn.now());
    table.timestamp("deleted");
  });
}

/**
 * Rollback function for the migration.
 */
export async function down(db: Knex) {
  await db.schema.dropTableIfExists("product");
  await db.schema.dropTableIfExists("interview");
  await db.schema.dropTableIfExists("job");
  await db.schema.dropTableIfExists("outcome");
  await db.raw("DROP TYPE IF EXISTS outcome_direction");
}

export const configuration = { transaction: true };
