import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const page = async () => {
  const session = await getServerSession(authOptions);
  // const user = await prisma.user.findUnique({
  //   where: { email: session?.user?.email },
  // });
  const ideas = await prisma.pfeideas.findMany();

  return (
    <div className="">
      <button>
        <Link href="/PfeIdeas/newIdea">New Pfe Idea</Link>
      </button>
      <div className="grid grid-cols-3  gap-10 pt-5">
        {ideas.map((idea) => (
          <div
            key={idea.id}
            className="max-w-xl p-5 bg-white  shadow-5 rounded-lg m-1 space-y-5"
          >
            <Link href={`/PfeIdeas/${idea.id}`}>
              <h2 className="">{idea.title}</h2>
              <Markdown>{idea.content}</Markdown>
            </Link>
            {/* {idea.userId === user?.id && (
              <div className="flex items-center gap-4">
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
                <span>By {user.name} </span>
              </div>
            )} */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
