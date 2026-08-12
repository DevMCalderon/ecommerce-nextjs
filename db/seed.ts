import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

async function main() {
  // Instantiate the Prisma object.
  const prisma = new PrismaClient();

  // Delete all the products.
  await prisma.product.deleteMany();

  // Create the products from the file.
  await prisma.product.createMany({ data: sampleData.products });

  console.log("Database seeded successfully!");
}

main();
