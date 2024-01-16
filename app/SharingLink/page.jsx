import prisma from "@/prisma/client";
import Content from "../components/mainPage/ContentPage";
import Latest from "../components/mainPage/Latest";
import Banner from "../components/mainPage/Banner";
import PageWrapper from "../PageAnimation";
import SideBare from "../components/mainPage/SideBare";

const page = async () => {
  const links = await prisma?.sharingLinks?.findMany();

  return (
    <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1 ">
        <SideBare />
      </div>
      <div className="col-span-2 ">
        <Banner href="/SharingLink/newLink" text={"Links"} />
        {links.map((link) => (
          <Content key={link.id} data={link} href={`/SharingLink/${link.id}`} />
        ))}
      </div>
      <div className="col-span-1">
        <Latest />
      </div>
    </div>
  );
};

export default page;
