import { PrismaClient } from "@prisma/client";

const prismaSingleton = () => {
  return new PrismaClient();
};

type PrismaClientSingleton = ReturnType<typeof prismaSingleton>;

const globlaForPrisma = globalThis as unknown as {
  prisma: PrismaClientSingleton | undefined;
};

const prisma = globlaForPrisma.prisma ?? prismaSingleton();

if (process.env.NODE_ENV === "development") {
  globlaForPrisma.prisma = prisma;
}

export default prisma;
