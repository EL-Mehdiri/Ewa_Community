import React from "react";
import dynamic from "next/dynamic";
import Spinner from "@/app/components/Spinner";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
const IdeaForm = dynamic(
  () => import("@/app/PfeIdeas/_components/PfeIdeaForm"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);
const NewIdea = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  return <IdeaForm userId={user.id} />;
};

export default NewIdea;
