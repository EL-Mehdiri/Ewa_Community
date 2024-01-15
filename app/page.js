
import prisma from "@/prisma/client";
import Content from './components/mainPage/ContentPage'
import { cache } from "react";
import PageWrapper from './PageAnimation';
import Latest from "./components/mainPage/Latest";
import Banner from "./components/mainPage/Banner";

const fetchIdeas = cache(() => prisma?.pfeideas?.findMany());
const fetchLink = cache(() => prisma?.sharingLinks?.findMany());

export default async function Home() {
  const ideas = await fetchIdeas();
  const links = await fetchLink();



  return (
    <PageWrapper>
      <div className="grid gap-6 grid-cols-3">
        <div className="col-span-2 ">
          <Banner href="/PfeIdeas/newIdea" text={"Ideas"} />
          {ideas.map((idea) => (
            <Content key={idea.id} data={idea} href={`/PfeIdeas/${idea.id}`} />
          ))}
          <p> link </p>
          {links.map((link) => (
            <Content key={link.id} data={link} href={`/SharingLink/${link.id}`} />
          ))}
        </div>
        <div className="col-span-1">
          <Latest />
        </div>
      </div >
    </PageWrapper>
  )
}
