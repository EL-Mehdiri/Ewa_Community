import PopupModel from "@/app/components/PopupModel";
import prisma from "@/prisma/client";
import Link from "next/link";
import { getServerSession } from "next-auth";

import Markdown from "react-markdown";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

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
      <div className="prose  prose-Slate bg-red-50 p-6 rounded-lg">
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
    );
  }
  if (!link) return { notFound: true };

  return (
    <div className="prose  prose-Slate bg-red-50 p-6 rounded-lg">
      <h3>{link?.title}</h3>
      <Markdown>{link?.content}</Markdown>
      <p>{link?.createdAt.toDateString()}</p>
    </div>
  );
};

export default page;
