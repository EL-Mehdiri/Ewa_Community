import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Markdown from "react-markdown";

import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const ProfilePage = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  const ideas = await prisma.pfeideas.findMany({ where: { userId: user.id } });

  return (
    <div className="">
      {/* <button>
        <Link href="/PfeIdeas/newIdea">New Pfe Idea</Link>
      </button> */}
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

export default ProfilePage;
