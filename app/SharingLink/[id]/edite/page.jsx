import prisma from "@/prisma/client";

import { notFound } from "next/navigation";
import SharingLinkForm from "../../_components/SharingLinkForm";

const UpdateLink = async ({ params }) => {
  const link = await prisma.sharingLinks.findUnique({
    where: { id: params.id },
  });
  if (!link) notFound();

  return <SharingLinkForm link={link} />;
};

export default UpdateLink;
