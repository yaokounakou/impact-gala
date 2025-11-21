import "dotenv/config";
import { defineConfig } from "drizzle-kit";
import { dbCredentials } from "./db/dbCredentials";

export default defineConfig({
  // The directory where the generated migration files will be stored
  out: "./drizzle",
  // The path to your database schema file
  schema: "./db/schema.ts",
  dialect: "postgresql",
  dbCredentials,
});
