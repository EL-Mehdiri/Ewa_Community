import prisma from "@/prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { NewsSchema } from "../validationSchemas";
import fs from "fs/promises";
import { writeFile } from "fs/promises";
import path from "path";
import { join } from "path";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/authOptions";

export async function POST(request) {
  const session = await getServerSession(authOptions)
  if (!session) return NextResponse.json({}, { status: 401 })

  const body = await request.json();
  const validation = NewsSchema.safeParse(body)

  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 })

  const Newarticle = await prisma.news.create({
    data: {
      title: body.title,
      image: body.image || null,
      content: body.content,
      userId: body.userId
    }
  })
  return NextResponse.json(Newarticle, { status: 201 });

}
export async function GET(request) {
  const articles = await prisma.news.findMany();

  return NextResponse.json(articles);
}
