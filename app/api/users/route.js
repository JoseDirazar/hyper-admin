import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "../../../lib/prismadb";

export async function GET(req) {
  try {
    const userId = auth();

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    const users = await prismadb.user.findMany();

    return NextResponse.json(users);
  } catch (error) {
    console.log("USERS_GET", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    
    const userId = auth();
    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    const body = await req.json();
    const { hyperEventUserId } = body;

    await prismadb.user.update({
        where: {
            id: hyperEventUserId
        },
        data: {
            admin: true
        }
    })

    return new NextResponse("User banned.", { status: 200 })
  } catch (error) {}
}
