import PopupModel from "@/app/components/PopupModel";
import prisma from "@/prisma/client";
import Link from "next/link";
import Markdown from "react-markdown";

const page = async ({ params }) => {
  const idea = await prisma.pfeideas.findUnique({ where: { id: params.id } });

  if (!idea) return { notFound: true };

  return (
    <div className="prose  prose-Slate bg-red-50 p-6 rounded-lg">
      <h3>{idea.title}</h3>
      <Markdown>{idea.content}</Markdown>
      <p>{idea.createdAt.toDateString()}</p>
      <div className="flex gap-2">
        <button>
          <Link href={`/PfeIdeas/${params.id}/edite`}>Edite Idea</Link>
        </button>
        {/* <DeleteButton id={params.id} /> */}
        <PopupModel url={`/api/pfeIdeas/${params.id}`} />
      </div>
    </div>
  );
};

export default page;
