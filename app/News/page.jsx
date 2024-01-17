import prisma from "@/prisma/client";
import SideBare from "../components/mainPage/SideBare";
import Banner from "../components/mainPage/Banner";
import Content from "../components/mainPage/ContentPage";

const page = async () => {
  const articles = await prisma?.news?.findMany();

  return (
    <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1 ">
        <SideBare />
      </div>
      <div className="col-span-3">
        <Banner href="/News/addNews" text={"News"} />
        <div className=" grid grid-cols-3 gap-5  overflow-hidden">
          {articles.map((article) => (
            <Content
              key={article.id}
              data={article}
              href={`/News/${article.id}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
