"use client";
import prisma from "@/prisma/client";
import Image from "next/image";
import userIcon from "../../../public/user icon.jpg";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const UserForm = ({ user }) => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();
  const router = useRouter();

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      // formData.append("email", email);
      formData.append("password", password);
      formData.append("file", file);
      await axios.put("/api/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      router.push("/");
      router.refresh();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="relative w-full bg-gradient-to-l from-[#FFABFC] to-[#A68CEE] place-content-center grid h-screen">
      <div className="w-full h-2/3 bg-white absolute bottom-0" />
      {/* <Image src={"/Elipse.png"} fill alt="" /> */}

      <div className=" relative   w-fit grid grid-cols-3  px-20  gap-20 bg-white rounded-lg shadow-md p-10">
        <div className="col-span-1">
          <Image
            src={user.image || userIcon}
            alt=""
            width={239}
            height={239}
            className="rounded-full"
          />
          <h2 className="text-gray-800 mb-0.5"></h2>
          <p></p>
        </div>

        <form
          className="flex flex-col gap-5 p-10 col-span-2 rounded-lg"
          onSubmit={(e) => {
            e.preventDefault();
            onSubmit();
            console.log(username, password, file);
          }}
          encType="multipart/form-data"
        >
          <div className="w-full">
            <label
              htmlFor="username"
              className=" mb-2  block text-left text-gray-700 "
            >
              Username
            </label>
            <input
              type="text"
              defaultValue={user?.name}
              className="w-full pl-8 rounded-full py-3 bg-[#F1F2F4]"
              name="username"
              placeholder="enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <div className="w-full">
            <label
              htmlFor="email"
              className=" mb-2 block text-left text-gray-700 "
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="enter your email"
              value={user?.email}
              disabled
              className="w-full pl-8 rounded-full py-3 bg-[#b5b5b5] text-[#00000097]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="w-full">
            <label
              htmlFor="password"
              className=" mb-2 block text-left text-gray-700 "
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              className="w-full pl-8 rounded-full py-3 bg-[#F1F2F4]"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <input
            type="file"
            name="file"
            onChange={(e) => setFile(e.target.files?.[0])}
          />
          <button
            type="submit"
            className="  rounded-3xl w-full flex justify-center gap-4  bg-gray-200 hover:bg-purple-500 hover:text-white mt-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="20"
              viewBox="0 0 24 20"
              fill="none"
            >
              <path
                d="M23 1.99762V7.99762M23 7.99762H17M23 7.99762L18.36 3.63763C17.2853 2.56235 15.9556 1.77684 14.4952 1.35441C13.0348 0.931975 11.4911 0.886385 10.0083 1.22189C8.52547 1.5574 7.1518 2.26307 6.01547 3.27305C4.87913 4.28304 4.01717 5.56442 3.51 6.99763M1 17.9976V11.9976M1 11.9976H7M1 11.9976L5.64 16.3576C6.71475 17.4329 8.04437 18.2184 9.50481 18.6409C10.9652 19.0633 12.5089 19.1089 13.9917 18.7734C15.4745 18.4379 16.8482 17.7322 17.9845 16.7222C19.1209 15.7122 19.9828 14.4308 20.49 12.9976"
                stroke="#353535"
                stroke-width="1.7"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>{" "}
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
