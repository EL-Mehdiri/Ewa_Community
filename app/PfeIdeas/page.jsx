import prisma from "@/prisma/client";
import Content from "../components/mainPage/ContentPage";
import Latest from "../components/mainPage/Latest";
import Banner from "../components/mainPage/Banner";

const page = async () => {
  const ideas = await prisma?.pfeideas?.findMany();

  return (
    <div className="grid gap-6 grid-cols-3">
      <div className="col-span-2 ">
        <Banner href="/SharingLink/newLink" />
        {ideas.map((idea) => (
          <Content key={idea.id} data={idea} href={`/PfeIdeas/${idea.id}`} />
        ))}
      </div>
      <div className="col-span-1">
        <Latest />
      </div>
    </div>
  );
};

export default page;
