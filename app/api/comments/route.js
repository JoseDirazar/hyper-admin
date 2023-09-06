import { NextResponse } from "next/server";
import prismadb from "../../../lib/prismadb";
import { auth } from "@clerk/nextjs";

export async function GET() {
  try {
    const userId = auth()

    if (!userId) return new NextResponse("Unauthenticated", { status: 401 });

    const commentsDB = await prismadb.comments.findMany({
        include: {
            user: true
        }
    });
    if(!commentsDB) return new NextResponse("No comments found.", { status: 500 })

    return  NextResponse.json(commentsDB);
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal error.", { status: 500 })
  }
}

export async function PATCH(req) {

  const body = await req.json()

  const {statusComment, id} = body 
  try {
    const commentToShow = await prismadb.comments.update({ 
      where: { id: id },
      data: { show: statusComment }});

    if(!commentToShow) return new NextResponse("No comments found.", { status: 500 })

    return new NextResponse.json(commentToShow);
  } catch (error) {
    console.log(error)
    return new NextResponse("Internal error.", { status: 500 })
  }
}