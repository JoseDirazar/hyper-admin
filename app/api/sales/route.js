import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "../../../lib/prismadb";

export async function GET() {
  try {
     /* const { userId } = auth();

    if (!userId) return NextResponse("Unauthorized", { status: 403 }); */

    const totalSales = await prismadb.sales.findMany();

    const formattedSales = totalSales.map((sale) => ({...sale, createdAt: sale.createdAt.toString().split('G')[0].trim() }))

    return NextResponse.json(formattedSales);
  } catch (error) {
    console.log("[TOTAL_SALES", error)
    return new NextResponse("Internal error.", { status: 500 })
  }
}
