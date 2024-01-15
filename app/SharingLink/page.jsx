import prisma from "@/prisma/client";
import Content from "../components/mainPage/ContentPage";
import Latest from "../components/mainPage/Latest";
import Banner from "../components/mainPage/Banner";
import PageWrapper from "../PageAnimation";
import SideBare from "../components/mainPage/SideBare";

// async function getData() {
//   const res = await fetch("http://localhost:3000/api/sharingLink");

//   if (!res.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   return res.json();
// }

const page = async () => {
  const links = await prisma?.sharingLinks?.findMany();

  return (
    <PageWrapper>
      <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
        <div className="col-span-1 ">
          <SideBare />
        </div>
        <div className="col-span-2 ">
          <Banner href="/SharingLink/newLink" bg={"#FE8174"} text={"Link"} />
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
