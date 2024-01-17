import prisma from "@/prisma/client";
import Link from "next/link";
import Markdown from "react-markdown";

import RegisterForm from "../components/RegisterForm";
import React from "react";

const page = () => {
  return (
    <div>
      <RegisterForm />
    </div>
  );
};

export default page;
