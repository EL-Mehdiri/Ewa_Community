import React from "react";
import dynamic from "next/dynamic";
import Spinner from "@/app/components/Spinner";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import prisma from "@/prisma/client";
const ArticleForm = dynamic(
  () => import("@/app/News/_components/NewsArticleForm"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);
const NewArticle = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  return <ArticleForm userId={user.id} />;
};

export default NewArticle;
