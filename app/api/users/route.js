import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "../../../lib/prismadb";

export async function GET(req) {
  try {
    /* const userId = auth();

    if (!userId) return  NextResponse("Unauthenticated", { status: 401 }); */

    const users = await prismadb.user.findMany({
      orderBy: {
        name: 'asc'
      }
    });

    return NextResponse.json(users);
  } catch (error) {
    console.log("USERS_GET", error);
    return  NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    
    /* const userId = auth();
    if (!userId) return  NextResponse("Unauthenticated", { status: 401 }); */

    const body = await req.json();

    const { hyperEventUserId, status } = body;

    await prismadb.user.update({
        where: {
            id: hyperEventUserId
        },
        data: {
            active: status
        }
    })

    return new NextResponse("User banned.", { status: 200 })
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal error", { status: 500 });
  }
}
