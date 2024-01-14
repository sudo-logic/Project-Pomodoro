import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const myTable = pgTable("rooms", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
});
