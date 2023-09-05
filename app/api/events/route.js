import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import prismadb from "../../../lib/prismadb";

export async function GET(req) {
  try {
    const userId = auth();

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    const events = await prismadb.event.findMany();
    
    return NextResponse.json(events);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function PATCH(req) {
  try {
    const userId = auth();
    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    const body = await req.json();

    const { eventId, eventStatus } = body;

    const events = await prismadb.event.update({
      where: {
        id: eventId,
      },
      data: {
        active: !eventStatus,
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    const userId = auth();
    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    const body = await req.json();

    const { eventId } = body;

    const events = await prismadb.event.delete({
      where: {
        id: eventId,
      },
    });

    return NextResponse.json(events);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
