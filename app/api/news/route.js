import prisma from "@/prisma/client";
import { NextResponse, NextRequest } from "next/server";
import { NewsSchema } from "../validationSchemas";
import fs from "fs/promises";
import { writeFile } from "fs/promises";
import path from "path";
import { join } from "path";

export async function POST(request) {
  const formData = await request.formData();
  const file = formData.get("file");

  const validation = NewsSchema.safeParse(Object.fromEntries(formData));
  if (!file) {
    return NextResponse.json({ success: false });
  }
  if (!validation.success)
    return NextResponse.json(validation.error.errors, { status: 400 });
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join("./public", "images", file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);
    const imageUrl = `/images/${file.name}`;
    const newArticle = await prisma.news.create({
      data: {
        title: validation.data.title,
        content: validation.data.content,
        userId: validation.userId,
        image: imageUrl,
      },
    });
    return NextResponse.json({ success: true, newArticle });
  } catch (error) {
    console.error("Error saving image data to database:", error);
    return NextResponse.json({ success: false });
  }
}
export async function GET(request) {
  const articles = await prisma.news.findMany();

  return NextResponse.json(articles);
}
