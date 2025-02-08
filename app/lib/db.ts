import { PrismaClient } from "@prisma/client";
import { Return } from "@prisma/client/runtime/library";

const PrismaClientSingleton = () => {
    return new PrismaClient();
};

declare const globalThis: {
    prismaGlobal: Return<typeof PrismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? PrismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;