import prisma from "../../../../../prisma";

export async function GET(){
  try {
    const users = await prisma.user.findMany();
    return new Response(JSON.stringify(users));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}