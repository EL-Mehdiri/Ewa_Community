import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
    const query = params.id;
    if (!query) return NextResponse.json("No result Found!!");


    try {
        const searchResults = await prisma.$transaction([
            prisma.news.findMany({
                where: {
                    OR: [
                        { title: { contains: query, mode: 'insensitive' } },
                        { content: { contains: query, mode: 'insensitive' } },
                    ],
                },
            }),
            prisma.pfeideas.findMany({
                where: {
                    OR: [
                        { title: { contains: query, mode: 'insensitive' } },
                        { content: { contains: query, mode: 'insensitive' } },
                    ],
                },
            }),
            prisma.sharingLinks.findMany({
                where: {
                    OR: [
                        { title: { contains: query, mode: 'insensitive' } },
                        { content: { contains: query, mode: 'insensitive' } },
                    ],
                },
            }),
        ]);

        const flattenedResults = searchResults.flat();
        if (flattenedResults.length === 0) {
            return NextResponse.json("No result Found!!");
        }

        return NextResponse.json(flattenedResults);
    } catch (error) {
        console.error('Error executing search:', error);
        return NextResponse.json({ error: 'Internal Server Error' });
    }
}
