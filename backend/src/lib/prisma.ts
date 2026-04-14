import "dotenv/config";
import { PrismaNeon } from "@prisma/adapter-neon";
import { PrismaClient } from "../../generated/prisma/client";
//import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
      throw new Error("DATABASE_URL is missing. Check backend/.env and dotenv loading.");
}

const adapter = new PrismaNeon({
      connectionString
});

const prisma = new PrismaClient({ adapter });

export default prisma;