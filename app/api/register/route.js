import prisma from "@/prisma/client";
import { NextResponse } from "next/server"
import { z } from "zod"
import bcrypt from "bcrypt";

const shema = z.object({
    username: z.string().min(2),
    email: z.string().email(),
    password: z.string().min(5),
})
export async function POST(request) {
    const body = await request.json()

    const validation = shema.safeParse(body);
    if (!validation.success) return NextResponse.json(validation.error.errors, { status: 400 });
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (user) return NextResponse.json({ error: "User already exists" }, { status: 409 });

    const hashedPassword = await bcrypt.hash(body.password, 10);
    const newUser = await prisma.user.create({
        data: {
            name: body.username,
            email: body.email,
            hashedPassword,
        }
    })
    return NextResponse.json({ userName: newUser.name, email: newUser.email }, { status: 201 })



}