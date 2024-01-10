import { NextResponse } from "next/server"
import { IdeaSchema } from "../../validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";


export async function PATCH(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({}, { status: 401 })

    const body = await request.json();
    const validationSchema = IdeaSchema.safeParse(body)
    if (!validationSchema.success) return NextResponse.json(validationSchema.error.format())
    // Get the idea to be edited and check it exists
    const idea = await prisma.pfeideas.findUnique({ where: { id: params.id } })
    if (!idea) return NextResponse.json({ error: "Idea is not Exist !!! " }, { status: 404 })
    const updateIdea = await prisma.pfeideas.update({
        where: { id: idea.id },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return NextResponse.json(updateIdea)
}



export async function DELETE(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({}, { status: 401 })

    const idea = await prisma.pfeideas.findUnique({ where: { id: params.id } })
    if (!idea) return NextResponse.json({ error: "Idea is not Exist !!! " }, { status: 404 })
    await prisma.pfeideas.delete({
        where: { id: idea.id },
    })
    return NextResponse.json({})
}