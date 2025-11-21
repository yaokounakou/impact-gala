import { drizzle } from "drizzle-orm/node-postgres";
import { client } from "./client";

export const db = drizzle(client);
