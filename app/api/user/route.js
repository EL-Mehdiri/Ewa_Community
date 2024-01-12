import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { authOptions } from "../auth/[...nextauth]/authOptions";
import bcrypt from "bcrypt";


export async function GET(request) {
    const session = await getServerSession(authOptions)
    if (session) {
        const user = await prisma.user.findUnique({ where: { email: session.user.email } })
        return NextResponse.json(user)
    }
    const users = await prisma.user.findMany()
    return NextResponse.json(users)
}



export async function PUT(request) {
    const session = await getServerSession(authOptions)
    const body = await request.json()
    const user = await prisma.user.findUnique({ where: { email: body.email } })
    if (!user) return NextResponse.json({ error: "user is not Exist !!! " }, { status: 404 })
    const hashedPassword = await bcrypt.hash(body.password, 10);
    const updateUser = await prisma.user.update({
        where: { id: user.id },
        data: {
            name: body.username,
            email: body.email,
            hashedPassword,
        }
    })
    return NextResponse.json(updateUser)
}
