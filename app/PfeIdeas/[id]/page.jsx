import prisma from "@/prisma/client";
import React from "react";
import Markdown from "react-markdown";
import Link from "next/link";

const page = async ({ params }) => {
  const idea = await prisma.pfeideas.findUnique({ where: { id: params.id } });

  if (!idea) return { notFound: true };

  return (
    <div className="prose  prose-Slate bg-red-50 p-6 rounded-lg">
      <h3>{idea.title}</h3>
      <Markdown>{idea.content}</Markdown>
      <p>{idea.createdAt.toDateString()}</p>
      <button>
        <Link href={`/PfeIdeas/${params.id}/edite`}>Edite Idea</Link>
      </button>
    </div>
  );
};

export default page;
