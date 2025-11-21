import "dotenv/config";
import { Pool } from "pg";
import { dbCredentials } from "./dbCredentials";

export const client = new Pool(dbCredentials);
