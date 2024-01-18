import React from "react";
import UserForm from "./_components/UserForm";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";

const page = async () => {
  const session = await getServerSession(authOptions);
  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  return (
    <div>
      <UserForm user={user} />
    </div>
  );
};

export default page;
