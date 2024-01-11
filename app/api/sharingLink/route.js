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

    const newLink = await prisma.sharingLinks.create({
        data: {
            title: body.title,
            content: body.content,
            userId: body.userId
        }
    })
    return NextResponse.json(newLink, { status: 201 });

}


export async function GET(request) {
    const body = await request.json();

    if (!body.userId) {
        const links = await prisma.sharingLinks.findMany();
        return NextResponse.json(links)
    }
    const links = await prisma.sharingLinks.findMany({ id: body.userId });

    console.log(links)


    return NextResponse.json(links)
}

