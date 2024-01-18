import prisma from "@/prisma/client";
import Content from "../components/mainPage/ContentPage";
import Latest from "../components/mainPage/Latest";
import Banner from "../components/mainPage/Banner";
import PageWrapper from "../PageAnimation";
import { cache } from "react";
import SideBare from "../components/mainPage/SideBare";

const fetchIdeas = cache(() =>
  prisma?.pfeideas?.findMany({
    orderBy: {
      createdAt: "desc", // Assuming there's a createdAt field in your news model
    },
  })
);

const Page = async () => {
  const ideas = await fetchIdeas();

  return (
    <PageWrapper>
      <div className="p-5 grid container mx-auto grid-cols-4 gap-6">
        <div className="col-span-1">
          <SideBare />
        </div>
        <div className="col-span-2">
          <Banner href="/PfeIdeas/newIdea" text={"Ideas"} />
          {ideas && ideas.length ? (
            ideas.map((idea) => (
              <Content
                key={idea.id}
                data={idea}
                href={`/PfeIdeas/${idea.id}`}
              />
            ))
          ) : (
            <h2 className="text-center font-bold text-gray-700 dark hover:text-blue-600 dark:hover:text-white transition duration-300 ease-in-out">
              No Ideas Yet
            </h2>
          )}
        </div>
        <div className="col-span-1">
          <Latest />
        </div>
      </div>
    </PageWrapper>
  );
};

export default Page;
