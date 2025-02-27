import {integer, pgTable, text, serial, varchar} from 'drizzle-orm/pg-core';

export const usersTable = pgTable('users_table', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    age: integer('age').notNull(),
    email: varchar('email').notNull().unique(),
  });