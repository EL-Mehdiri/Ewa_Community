import prisma from "@/prisma/client";
import Link from "next/link";
import Markdown from "react-markdown";
import LoginForm from "../components/LoginForm";
// import NavBar from "../components/NavBar";
// import SideBar from "../components/SideBar";
// import UsersBar from "../components/UsersBar";
const page = async () => {
  return <LoginForm />;
};

export default page;
