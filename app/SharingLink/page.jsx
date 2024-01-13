import prisma from "@/prisma/client";

import Content from "../components/mainPage/ContentPage";
import Latest from "../components/mainPage/Latest";
import Banner from "../components/mainPage/Banner";
import PageWrapper from "../PageAnimation";

const page = async () => {
  const links = await prisma?.sharingLinks?.findMany();

  return (
    <PageWrapper>
      <div className="grid gap-6 grid-cols-3">
        <div className="col-span-2 ">
          <Banner href="/SharingLink/newLink" />
          {links.map((link) => (
            <Content
              key={link.id}
              data={link}
              href={`/SharingLink/${link.id}`}
            />
          ))}
        </div>
        <div className="col-span-1">
          <Latest />
        </div>
      </div>
    </PageWrapper>
  );
};

export default page;
