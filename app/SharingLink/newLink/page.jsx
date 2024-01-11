import dynamic from "next/dynamic";
import Spinner from "@/app/components/Spinner";
import prisma from "@/prisma/client";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
const LinkForm = dynamic(
  () => import("@/app/SharingLink/_components/SharingLinkForm"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);
const NewLink = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });
  return <LinkForm userId={user.id} />;
};

export default NewLink;
