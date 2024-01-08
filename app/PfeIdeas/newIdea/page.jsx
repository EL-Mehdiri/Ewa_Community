import React from "react";
import PfeIdeaForm from "../_components/PfeIdeaForm";
import dynamic from "next/dynamic";
import Spinner from "@/app/components/Spinner";
const IdeaForm = dynamic(
  () => import("@/app/PfeIdeas/_components/PfeIdeaForm"),
  {
    ssr: false,
    loading: () => <Spinner />,
  }
);
const NewIdea = () => {
  return <IdeaForm />;
};

export default NewIdea;
