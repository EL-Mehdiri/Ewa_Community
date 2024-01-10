import prisma from "@/prisma/client";
import { NextResponse } from "next/server"

import { IdeaSchema } from "../validationSchemas";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function POST(request) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({}, { status: 401 })

    const body = await request.json();
    const validation = IdeaSchema.safeParse(body)

    if (!validation.success)
        return NextResponse.json(validation.error.errors, { status: 400 })

    const newIdea = await prisma.pfeideas.create({
        data: {
            title: body.title,
            content: body.content
        }
    })
    return NextResponse.json(newIdea, { status: 201 });

}


export async function GET(request) {

    const ideas = await prisma.pfeideas.findMany();

    return NextResponse.json(ideas)
}