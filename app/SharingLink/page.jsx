import prisma from "@/prisma/client";
import Link from "next/link";
import Markdown from "react-markdown";
import Image from "next/image";
import Content from "../components/mainPage/ContentPage";

const page = async () => {
  const links = await prisma?.sharingLinks?.findMany();

  const users = await prisma.user?.findMany();

  return (
    <div className="">
      {links.map((link) => (
        <Content link={link} users={users} href={`/SharingLink/${link.id}`} />
      ))}
    </div>
  );
};

export default page;
