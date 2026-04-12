
import { PrismaClient } from "../generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const prisma = new PrismaClient({
      adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
});

async function main() {
    const hotel = await prisma.hotel.create({
        data: {
        name: "Sea Breeze Resort",
        city: "Goa",
        state: "Goa",
        description: "Beachside resort with premium rooms.",
        rating: 4.4,
        reviewCount: 1280,
        thumbnail: "https://images.unsplash.com/...",
        },
    });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });