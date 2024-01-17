"use client";
import { getSession } from "next-auth/react";
import prisma from "@/prisma/client";
import Image from "next/image";
import userIcon from "../../../public/user icon.jpg";
import { useState } from "react";
import axios from "axios";

import elipse from "../../../public/Elipse.png";
const UserForm = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState();

  const onSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("username", username);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("file", file);
      await axios.put("/api/user", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="">
      <div className="user ">
        <Image
          src={elipse}
          alt=""
          className="bg-cover bg-no-repeat bg-center w-full h-screen"
        />
      </div>
      <div className="card relative  h-[756PX] bg-white rounded-lg shadow-md p-4 ">
        <div className="profile">
          <Image src={userIcon} alt="imgprofile" className="image" />
          <h2 className="text-gray-800 mb-0.5"></h2>
          <p></p>
        </div>
        <div className="formElement">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit();
              console.log(username, password, email, file);
            }}
            encType="multipart/form-data"
          >
            <label
              htmlFor="email"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="type your email..."
              onChange={(e) => setEmail(e.target.value)}
            />

            <label
              htmlFor="username"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="enter your username"
              onChange={(e) => setUserName(e.target.value)}
            />

            <label
              htmlFor="password"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="enter your password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <input
              type="file"
              name="file"
              onChange={(e) => setFile(e.target.files?.[0])}
            />
            <button
              type="submit"
              className="w-[426px] h-[45px]  rounded-3xl  bg-gray-200 hover:bg-purple-500 hover:text-white mt-6"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserForm;
