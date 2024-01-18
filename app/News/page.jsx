import prisma from "@/prisma/client";
import SideBare from "../components/mainPage/SideBare";
import BannerNews from "./BannerNews";
import Content from "../components/mainPage/ContentPage";

const Page = async () => {
  const articles = await prisma?.news?.findMany();

  return (
    <div className="p-5 grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1">
        <SideBare />
      </div>
      <div className="col-span-3">
        <BannerNews href="/News/addNews" text={"News"} />
        <div className="grid grid-cols-3 gap-5 overflow-hidden">
          {articles && articles.length ? (
            articles.map((article) => (
              <Content
                key={article.id}
                data={article}
                href={`/News/${article.id}`}
                text={"News"}
              />
            ))
          ) : (
            <h2 className="text-center font-bold text-gray-700 dark hover:text-blue-600 dark:hover:text-white transition duration-300 ease-in-out">
              No News Yet
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
