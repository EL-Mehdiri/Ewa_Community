"use client";
import React from "react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import axios from "axios";
import { useRouter } from "next/navigation";
import ErrorMessage from "@/app/components/ErrorMessage";
import Link from "next/link";
import Image from "next/image";

const LoginForm = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google");
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Google Sign In failed", error);
    }
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const { error, redirect } = await signIn("credentials", {
        email,
        password,
        username,
        redirect: false,
      });
      router.push("/");
      router.refresh();

      if (error) {
        console.error("Login failed", error.message || error);
      } else {
        console.log("User connected successfully");
        router.push("/");
        router.refresh();
        // Redirect the user to the appropriate page
      }
    } catch (err) {
      console.error("Login failed", err);
    }
  };

  return (
    <div className="flex relative  items-center justify-center h-screen bg-cover bg-center">
      <Image
        fill
        src="/aperture-vintage-NrAvSjyW3D4-unsplash 1.png"
        alt=""
        className="object-cover -z-10"
      />
      <div className="grid grid-cols-3 container mx-auto w-full ">
        <div className="mr-8 col-span-2 border-white rounded-lg bg-white bg-opacity-75 shadow-lg p-8 "></div>

        <div className="flex flex-col col-span-1 w-fit items-center justify-center rounded-lg border-white bg-white bg-opacity-75 shadow-lg p-8 ">
          <Image src={"/icon.svg"} width={112} height={39} alt="logo" />
          <h1 className="text-4xl font-semibol" style={{ color: "#967DFC" }}>
            Welcome back
          </h1>
          <p className="text-gray-600" style={{ color: "#8B8996" }}>
            Welcome back, Please enter your details.
          </p>
          <form onSubmit={onSubmit} className="mt-4 text-center">
            <label
              htmlFor="userName"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="userName"
              placeholder="Enter your username"
              required
              className="w-72 h-8 mb-4 p-2 border border-gray-300 rounded-full pl-16 bg-gradient-to-b from-white via-white to-opacity-80"
              style={{ width: "350px", height: "51px" }}
              onChange={(e) => setUsername(e.target.value)}
            />
            <label
              htmlFor="Email"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="Email"
              placeholder="Enter your email"
              required
              className="w-72 h-8 mb-4 p-2 border border-gray-300 rounded-full pl-16 bg-gradient-to-b from-white via-white to-opacity-80"
              style={{ width: "350px", height: "51px" }}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              htmlFor="Password"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="Password"
              placeholder="●●●●●●●"
              required
              className="w-72 h-8 mb-6 p-2 border border-gray-300 rounded-full pl-16 bg-gradient-to-b from-white via-white to-opacity-80"
              style={{ width: "350px", height: "51px" }}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              style={{ backgroundColor: "#967DFC" }}
              className="w-96 h-12 p-2  text-white border-none rounded-full cursor-pointer transition duration-300 hover:bg-indigo-800 mt-6"
            >
              Log in
            </button>

            <p className="mt-4">
              Don’t have an account?{" "}
              <Link href="/Register" style={{ color: "#967DFC" }}>
                Sign up
              </Link>
            </p>
            <div className=" flex items-center justify-center">
              <button
                type="button"
                className="w-80 h-14 px-4 mt-4 bg-white text-gray-700 border-none rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-600 hover:text-white focus:outline-none"
                onClick={handleGoogleSignIn}
              >
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
