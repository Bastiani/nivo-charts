import { Client } from "@hyper-fetch/core";

export const client = new Client({
  url: process.env.PUBLIC_VERCEL_URL || "http://localhost:3000",
}).setDebug(true);
