import { NextResponse } from "next/server"
import { NewsSchema } from "../../validationSchemas";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/authOptions";


export async function PATCH(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({}, { status: 401 })

  const body = await request.json();
  const validationSchema = NewsSchema.safeParse(body)
  if (!validationSchema.success) return NextResponse.json(validationSchema.error.format())
  // Get the idea to be edited and check it exists
  const article = await prisma.news.findUnique({ where: { id: params.id } })
  if (!article) return NextResponse.json({ error: "article is not Exist !!! " }, { status: 404 })
  const updateArtile = await prisma.news.update({
    where: { id: article.id },
    data: {
      title: body.title,
      image: body.image,
      content: body.content
    }
  })
  return NextResponse.json(updateArtile)
}



export async function DELETE(request, { params }) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({}, { status: 401 })

  const article = await prisma.news.findUnique({ where: { id: params.id } })
  if (!article) return NextResponse.json({ error: "article is not Exist !!! " }, { status: 404 })
  await prisma.news.delete({
    where: { id: article.id },
  })
  return NextResponse.json({})
}