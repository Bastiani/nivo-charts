import { Client } from "@hyper-fetch/core";

export const client = new Client({
  url: process.env.NEXT_PUBLIC_VERCEL_URL || "",
}).setDebug(true);
