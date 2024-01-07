import prisma from "@/prisma/client";
import Link from "next/link";
import delay from "delay";
const page = async () => {
  const ideas = await prisma.pfeideas.findMany();
  await delay(2000);
  return (
    <div className="">
      <button>
        <Link href="/PfeIdeas/newIdea">New Pfe Idea</Link>
      </button>
      <div className="grid grid-cols-3 gap-10 pt-5">
        {ideas.map((idea) => (
          <div
            className="max-w-xl p-5 bg-gray-900 rounded-lg m-1 space-y-5"
            key={idea.id}
          >
            <h2 className="text-blue-400">{idea.title}</h2>
            <p>{idea.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
