import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "../../../lib/prismadb";


export async function GET(
    req
) { 
    try {
        const users = await prismadb.user.findMany()
       
        return NextResponse.json(users)
    } catch (error) {
        console.log('USERS_GET', error)
        return new NextResponse("Internal error", { status: 500 });
    }
}