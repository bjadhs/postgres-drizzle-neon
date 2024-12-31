CREATE TABLE "users_table" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"age" integer NOT NULL,
	"email" varchar NOT NULL,
	CONSTRAINT "users_table_email_unique" UNIQUE("email")
);
