import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "~/generated/prisma/client";
import { env } from "~/lib/env";

const adapter = new PrismaPg({ connectionString: env.DATABASE_URL });

declare global {
  var __prisma: PrismaClient;
}

export const prisma = globalThis.__prisma || new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") {
  globalThis.__prisma = prisma;
}
