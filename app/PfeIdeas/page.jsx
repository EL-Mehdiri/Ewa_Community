import prisma from "@/prisma/client";
import Link from "next/link";
import Markdown from "react-markdown";

const page = async () => {
  const ideas = await prisma.pfeideas.findMany();

  return (
    <div className="">
      <button>
        <Link href="/PfeIdeas/newIdea">New Pfe Idea</Link>
      </button>
      <div className="grid grid-cols-3 gap-10 pt-5">
        {ideas.map((idea) => (
          <Link
            href={`/PfeIdeas/${idea.id}`}
            className="max-w-xl p-5 bg-white  shadow-5 rounded-lg m-1 space-y-5"
            key={idea.id}
          >
            <h2 className="">{idea.title}</h2>
            <Markdown>{idea.content}</Markdown>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default page;
