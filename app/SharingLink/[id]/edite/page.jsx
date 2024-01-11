import prisma from "@/prisma/client";
import PfeIdeaForm from "../../_components/SharingLinkForm";
import { notFound } from "next/navigation";

const UpdateIdea = async ({ params }) => {
  const idea = await prisma.pfeideas.findUnique({ where: { id: params.id } });
  if (!idea) notFound();

  return <PfeIdeaForm idea={idea} />;
};

export default UpdateIdea;
