import prisma from "@/prisma/client";
import NewsArticleForm from "../../_components/NewsArticleForm";
import { notFound } from "next/navigation";

const UpdateArticle = async ({ params }) => {
  const article = await prisma.news.findUnique({ where: { id: params.id } });
  if (!article) notFound();

  return <NewsArticleForm article={article} />;
};

export default UpdateArticle;
