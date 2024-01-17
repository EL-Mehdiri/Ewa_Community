import { NextResponse } from "next/server";
import { NewsSchema } from "../../validationSchemas";
import prisma from "@/prisma/client";
import fs from "fs/promises";
import { writeFile } from "fs/promises";
import path from "path";
import { join } from "path";
export async function PATCH(request, { params }) {
  const formData = await request.formData();
  const file = formData.get("file");
  const validation = NewsSchema.safeParse(Object.fromEntries(formData));
  if (!file) {
    return NextResponse.json({ success: false });
  }
  if (!validation.success) return NextResponse.json(validation.error.format());

  const article = await prisma.news.findUnique({ where: { id: params.id } });
  if (!article)
    return NextResponse.json(
      { error: "article does not exist !!! " },
      { status: 404 }
    );
  try {
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = join("./public", "images", file.name);
    await writeFile(path, buffer);
    console.log(`open ${path} to see the uploaded file`);
    const imageUrl = `/images/${file.name}`;
    const updateArticle = await prisma.news.update({
      where: { id: article.id },
      data: {
        title: validation.data.title,
        content: validation.data.content,
        image: imageUrl,
      },
    });

    return NextResponse.json(updateArticle);
  } catch (error) {
    console.error("Error saving image data to database:", error);
    return NextResponse.json({ success: false });
  }
}

export async function DELETE(request, { params }) {
  const article = await prisma.news.findUnique({ where: { id: params.id } });
  if (!article)
    return NextResponse.json(
      { error: "article does not Exist !!! " },
      { status: 404 }
    );
  await prisma.news.delete({
    where: { id: article.id },
  });
  return NextResponse.json({});
}
