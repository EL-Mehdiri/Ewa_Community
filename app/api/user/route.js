import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import bcrypt from "bcrypt";
import fs from "fs/promises";
import { writeFile } from "fs/promises";
import path from "path";
import { join } from "path";
export async function GET(request) {
  const session = await getServerSession(authOptions);
  if (session) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    return NextResponse.json(user);
  }
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}
export async function PUT(request) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json(
      { error: "User not authenticated." },
      { status: 401 }
    );
  }

  const formData = await request.formData();
  const file = formData.get("file");
  if (!file) {
    return NextResponse.json({ error: "No file provided." }, { status: 400 });
  }

  const userEmail = session.user.email.toLowerCase();

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const imagePath = join("./public", "userimg", file.name);
  await writeFile(imagePath, buffer);
  console.log(`open ${imagePath} to see the uploaded file`);
  const imageUrl = `/images/${file.name}`;
  const hashedPassword = await bcrypt.hash(formData.get("password"), 10);

  const updateUser = await prisma.user.update({
    where: { email: userEmail },
    data: {
      name: formData.get("username") || session.user.name,
      email: formData.get("email")
        ? formData.get("email").toLowerCase()
        : userEmail,
      hashedPassword,
      image: imageUrl,
    },
  });

  console.log("User updated:", updateUser);
  return NextResponse.json(updateUser);
}
