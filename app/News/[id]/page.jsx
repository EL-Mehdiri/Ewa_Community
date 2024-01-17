import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import PopupModel from "@/app/components/PopupModel";
import SideBare from "@/app/components/mainPage/SideBare";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import Link from "next/link";
import Markdown from "react-markdown";

const page = async ({ params }) => {
  const session = await getServerSession(authOptions);

  const article = await prisma.news.findUnique({ where: { id: params.id } });

  if (!article) return { notFound: true };

  if (session) {
    const user = await prisma?.user?.findUnique({
      where: { email: session?.user?.email },
    });
    return (
      <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
        <div className="col-span-1 ">
          <SideBare />
        </div>
        <div className="prose col-span-3  prose-Slate bg-red-50 p-6 rounded-lg">
          <div className="prose prose-Slate bg-red-50 p-6 rounded-lg">
            <h3>{article?.title}</h3>
            <Markdown>{article?.content}</Markdown>
            <p>{article.createdAt.toDateString()}</p>
            {session && article.userId === user.id && (
              <div className="flex gap-2">
                <button>
                  <Link href={`/News/${params.id}/edite`}>Edit Idea</Link>
                </button>
                <PopupModel url={`/api/news/${params.id}`} />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1 ">
        <SideBare />
      </div>
      <div className="prose col-span-3  prose-Slate bg-red-50 p-6 rounded-lg">
        <h3>{article?.title}</h3>
        <Markdown>{article?.content}</Markdown>
        <p>{article?.createdAt.toDateString()}</p>
      </div>
    </div>
  );
};

export default page;
