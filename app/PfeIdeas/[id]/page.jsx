import PopupModel from "@/app/components/PopupModel";
import prisma from "@/prisma/client";
import Link from "next/link";
import { getServerSession } from "next-auth";

import Markdown from "react-markdown";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import SideBare from "@/app/components/mainPage/SideBare";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const idea = await prisma.pfeideas.findUnique({
    where: { id: params.id },
  });

  if (session) {
    const user = await prisma?.user?.findUnique({
      where: { email: session?.user?.email },
    });
    return (
      <div className="p-5  grid container w-full mx-auto grid-cols-4 gap-6">
        <div className="col-span-1 ">
          <SideBare />
        </div>
        <div className="prose col-span-3 space-y-10 text-center text-white  prose-Slate  bg-gradient-to-l from-[#202020] to-[#424242f6]  p-6 rounded-lg">
          <h1 className="text-white">{idea?.title}</h1>

          <Markdown className="text-[24px] leading-10">
            {idea?.content}
          </Markdown>

          <p>{idea.createdAt.toDateString()}</p>
          {session && idea.userId === user.id && (
            <div className="flex justify-center text-[18px] font-medium items-center gap-2">
              <button className="rounded-full  font-bold py-2 px-8   bg-white">
                <Link
                  className="no-underline"
                  href={`/PfeIdeas/${params.id}/edite`}
                >
                  Edit Idea
                </Link>
              </button>
              <PopupModel url={`/api/pfeIdeas/${params.id}`} />
            </div>
          )}
        </div>
      </div>
    );
  }
  if (!idea) return { notFound: true };

  return (
    <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1 ">
        <SideBare />
      </div>
      <div className="prose col-span-3 space-y-10 text-center text-white  prose-Slate  bg-gradient-to-l from-[#202020] to-[#424242f6]  p-6 rounded-lg">
        <h1 className="text-white">{idea?.title}</h1>
        <Markdown className="text-[24px] leading-10">{idea?.content}</Markdown>
        <p>{idea?.createdAt.toDateString()}</p>
      </div>
    </div>
  );
};

export default page;
