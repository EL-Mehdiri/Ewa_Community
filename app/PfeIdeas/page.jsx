import prisma from "@/prisma/client";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";

const page = async () => {
  const ideas = await prisma?.pfeideas?.findMany();

  const users = await prisma.user?.findMany();

  return (
    <div className="">
      <button>
        <Link href="/PfeIdeas/newIdea">New Pfe Idea</Link>
      </button>
      <div className="grid grid-cols-3  gap-10 pt-5">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="max-w-xl p-5 bg-white shadow-5 rounded-lg m-1 space-y-5"
          >
            <Link href={`/PfeIdeas/${idea.id}`}>
              <h2 className="">{idea.title}</h2>
              <Markdown>{idea.content}</Markdown>
            </Link>
            {users.map((user) => {
              // Check if the userId of the idea matches the id of the user
              if (idea?.userId === user?.id) {
                return (
                  <div key={user.id} className="flex items-center gap-4">
                    {user.image ? (
                      <Image
                        width={50}
                        height={50}
                        src={user.image}
                        className="rounded-full"
                        alt="logo"
                      />
                    ) : (
                      <div className="w-[50px] h-[50px] rounded-full bg-gray-300 grid place-content-center">
                        ?
                      </div>
                    )}
                    <span>By {user.name}</span>
                  </div>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
