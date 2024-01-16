import PopupModel from "@/app/components/PopupModel";
import prisma from "@/prisma/client";
import Link from "next/link";
import { getServerSession } from "next-auth";

import Markdown from "react-markdown";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import SideBare from "@/app/components/mainPage/SideBare";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);
  const link = await prisma.sharingLinks.findUnique({
    where: { id: params.id },
  });

  if (session) {
    const user = await prisma?.user?.findUnique({
      where: { email: session?.user?.email },
    });
    return (
      <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
        <div className="col-span-1 ">
          <SideBare />
        </div>
        <div className="prose  col-span-3  prose-Slate bg-red-50 p-6 rounded-lg">
          <h3>{link?.title}</h3>

          <Markdown>{link?.content}</Markdown>
          <p>{link.createdAt.toDateString()}</p>
          {session && link.userId === user.id && (
            <div className="flex gap-2">
              <button>
                <Link href={`/SharingLink/${params.id}/edite`}>Edite link</Link>
              </button>
              <PopupModel url={`/api/sharingLink/${params.id}`} />
            </div>
          )}
        </div>
      </div>
    );
  }
  if (!link) return { notFound: true };

  return (
    <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1 ">
        <SideBare />
      </div>
      <div className="prose col-span-3  prose-Slate bg-red-50 p-6 rounded-lg">
        <h3>{link?.title}</h3>
        <Markdown>{link?.content}</Markdown>
        <p>{link?.createdAt.toDateString()}</p>
      </div>
    </div>
  );
};

export default page;
