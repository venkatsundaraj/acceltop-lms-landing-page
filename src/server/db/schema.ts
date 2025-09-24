import { pgTableCreator, serial, text, timestamp } from "drizzle-orm/pg-core";

export const createTable = pgTableCreator((name) => `acceltop_lms_${name}`);

export const waitListTable = createTable("waitlist", {
  id: serial("id").primaryKey(),
  email: text("email").notNull(),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at")
    .notNull()
    .$onUpdate(() => new Date()),
});
