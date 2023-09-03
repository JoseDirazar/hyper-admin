import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "../../../lib/prismadb";

export async function GET() {
  try {
    /* const { userId } = auth();

    if (!userId) return new NextResponse("Unauthorized", { status: 403 }); */

    const totalSales = await prismadb.sales.findMany();

    return NextResponse.json(totalSales);
  } catch (error) {
    console.log("[TOTAL_SALES", error)
    return new NextResponse("Internal error.", { status: 500 })
  }
}
