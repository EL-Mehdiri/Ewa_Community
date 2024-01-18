import { NextResponse } from "next/server";
import { UserSchema } from "../../validationSchemas";
import prisma from "@/prisma/client";
import fs from "fs/promises";
import { writeFile } from "fs/promises";
import path from "path";
import { join } from "path";
export async function PATCH(request, { params }) {
  const formData = await request.formData();
  const file = formData.get("file");
  const validation = UserSchema.safeParse(Object.fromEntries(formData));
  if (!file) {
    return NextResponse.json({ success: false });
  }
  if (!validation.success) return NextResponse.json(validation.error.format());

  const user = await prisma.user.findUnique({ where: { id: params.id } });
  if (!user)
    return NextResponse.json(
      { error: "user does not exist !!! " },
      { status: 404 }
    );
  try {
    const hashedPassword = await bcrypt.hash(validation.data.password, 10);
    const updatedUser = await prisma.user.update({
      where: { id: user.id },
      data: {
        username: validation.data.username,
        password: hashedPassword,
        // email: validation.data.email,
        // emailVerified: validation.data.email,
        image: imageUrl,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    console.error("Error saving image data to database:", error);
    return NextResponse.json({ success: false });
  }
}
