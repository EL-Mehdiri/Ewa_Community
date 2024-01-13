import prisma from "@/prisma/client";
import Content from "../components/mainPage/ContentPage";
import Latest from "../components/mainPage/Latest";
import Banner from "../components/mainPage/Banner";
import PageWrapper from "../PageAnimation";
import { cache } from "react";

const fetchIdeas = cache(() => prisma?.pfeideas?.findMany());

const page = async () => {
  const ideas = await fetchIdeas();

  return (
    <PageWrapper>
      <div className="grid gap-6 grid-cols-3">
        <div className="col-span-2 ">
          <Banner href="/PfeIdea/newIdea" text={"Ideas"} />
          {ideas.map((idea) => (
            <Content key={idea.id} data={idea} href={`/PfeIdeas/${idea.id}`} />
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
