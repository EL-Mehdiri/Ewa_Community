import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

const Content = async ({ data, href }) => {
  const users = await prisma.user?.findMany();
  return (
    <Link
      href={href}
      className="bg-gradient-to-l from-black to-[#3B3B3B] flex mb-5 gap-10 text-white object-contain relative p-16 w-full rounded-lg"
    >
      <Image src={"/Pattern.png"} fill />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 31 31"
        fill="none"
      >
        <g clip-path="url(#clip0_89_53083)">
          <path
            d="M30.5421 15.9991C19.5516 16.9232 16.9228 19.551 15.9997 30.5415C15.9486 31.1528 15.0526 31.1528 15.0015 30.5415C14.0774 19.551 11.4496 16.9222 0.459131 15.9991C-0.15223 15.948 -0.15223 15.052 0.459131 15.0009C11.4496 14.0768 14.0784 11.449 15.0015 0.458521C15.0526 -0.15284 15.9486 -0.15284 15.9997 0.458521C16.9238 11.449 19.5516 14.0778 30.5421 15.0009C31.1535 15.052 31.1535 15.948 30.5421 15.9991Z"
            fill="white"
          />
        </g>
        <defs>
          <clipPath id="clip0_89_53083">
            <rect width="31" height="31" fill="white" />
          </clipPath>
        </defs>
      </svg>
      <div className="space-y-[25px]">
        <h3 className="text-[48px] font-normal  "> {data?.title}</h3>

        <Markdown className="text-[24px] font-normal leading-10">
          {data?.content}
        </Markdown>

        {users.map((user) => {
          // Check if the userId of the data matches the id of the user
          if (data?.userId === user?.id) {
            return (
              <div key={user.id} className="flex  items-center gap-6">
                {user.image ? (
                  <Image
                    width={50}
                    height={50}
                    src={user.image}
                    className="rounded-full"
                    alt="logo"
                  />
                ) : (
                  <div className="w-[50px] h-[50px] rounded-full bg-gray-300 grid place-content-center">
                    ?
                  </div>
                )}
                <p className="text-[18px] font-medium mt-5 ">By {user.name}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
    </Link>
  );
};

export default Content;
