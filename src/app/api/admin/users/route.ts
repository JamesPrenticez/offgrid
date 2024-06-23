import { redisInstance } from "@/lib/redisInstance";
import prisma from "../../../../../prisma";

export async function GET(){
  try {
    const cachedValue = await redisInstance.get("users");

    if(cachedValue) {
      console.log("Redis cached value was returned");
      return new Response(JSON.stringify(cachedValue));
    }

    const users = await prisma.user.findMany();
    console.log("Database was queried");
    
    if(!users) return new Response("Error - No users found", { status: 404 });

    await redisInstance.set("users", JSON.stringify(users));

    return new Response(JSON.stringify(users));
  } catch (error) {
    return new Response(JSON.stringify(error));
  }
}