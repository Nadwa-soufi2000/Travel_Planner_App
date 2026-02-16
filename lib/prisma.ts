//import { PrismaClient } from "@/app/generated/prisma/client";

//const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

//export const prisma = globalForPrisma.prisma || new PrismaClient({});

//if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;


import { PrismaClient } from "@/app/generated/prisma/client"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"

const connectionString = process.env.DATABASE_URL!

const pool = new Pool({ connectionString })
const adapter = new PrismaNeon(pool)

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({ adapter })

if (process.env.NODE_ENV !== "production")
  globalForPrisma.prisma = prisma