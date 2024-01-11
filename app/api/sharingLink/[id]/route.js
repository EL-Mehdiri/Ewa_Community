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
    const link = await prisma.sharingLinks.findUnique({ where: { id: params.id } })
    if (!link) return NextResponse.json({ error: "link is not Exist !!! " }, { status: 404 })
    const updateLink = await prisma.sharingLinks.update({
        where: { id: link.id },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return NextResponse.json(updateLink)
}



export async function DELETE(request, { params }) {
    const session = await getServerSession(authOptions)
    if (!session) return NextResponse.json({}, { status: 401 })

    const link = await prisma.sharingLinks.findUnique({ where: { id: params.id } })
    if (!link) return NextResponse.json({ error: "link is not Exist !!! " }, { status: 404 })
    await prisma.sharingLinks.delete({
        where: { id: idea.id },
    })
    return NextResponse.json({})
}