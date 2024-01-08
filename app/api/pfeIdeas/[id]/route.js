import { NextResponse } from "next/server"
import { IdeaSchema } from "../../validationSchemas";
import prisma from "@/prisma/client";


export async function PATCH(request, { params }) {
    const body = await request.json();
    const validationSchema = IdeaSchema.safeParse(body)
    if (!validationSchema.success) return NextResponse.json(validationSchema.error.format())
    // Get the idea to be edited and check it exists
    const idea = await prisma.pfeideas.findUnique({ where: { id: params.id } })
    if (!idea) return NextResponse.json({ error: "Idea id not Exist !!! " }, { status: 404 })
    const updateIdea = await prisma.pfeideas.update({
        where: { id: idea.id },
        data: {
            title: body.title,
            content: body.content
        }
    })
    return NextResponse.json(updateIdea)
}