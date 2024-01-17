"use client";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { zodResolver } from "@hookform/resolvers/zod";
import { UserSchema } from "@/app/api/validationSchemas";
import { useForm } from "react-hook-form";
import ErrorMessage from "@/app/components/ErrorMessage";
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(UserSchema),
  });
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const onSubmit = handleSubmit(async (data) => {
    try {
      const response = await axios.post("/api/register", {
        username,
        email,
        password,
      });

      console.log("User registered successfully", response.data);
    } catch (error) {
      console.error("Registration failed", error.response.data);
    }
  });
  return (
    <div
      className="flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("RegisterBackground.jpeg")' }}
    >
      <div className="flex justify-center items-center h-screen">
        <div
          className="mr-8 border-white rounded-lg bg-white bg-opacity-75 shadow-lg p-8 w-96 h-96"
          style={{ width: "500px", height: "600px" }}
        >
          {/* Add image */}
        </div>

        <div
          className="flex flex-col items-center justify-center rounded-lg border-white bg-white bg-opacity-75 shadow-lg p-8 w-96 h-96"
          style={{ width: "500px", height: "620px" }}
        >
          <img src="cdo.jpeg" alt="Logo" className="w-12 h-12" />
          <form onSubmit={onSubmit} className="mt-8 text-center">
            <label
              htmlFor="username"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Username
            </label>
            <input
              type="text"
              placeholder="Enter your username"
              name="name"
              required
              className="w-72 h-8 mb-4 p-2 border border-gray-300 rounded-full pl-16 bg-gradient-to-b from-white via-white to-opacity-80"
              style={{ width: "350px", height: "51px" }}
              {...register("username")}
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
            {errors.username && (
              <ErrorMessage error={errors.username.message} />
            )}
            <label
              htmlFor="email"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              required
              className="w-72 h-8 mb-4 p-2 border border-gray-300 rounded-full pl-16 bg-gradient-to-r from-white via-white to-opacity-80"
              style={{
                width: "350px",
                height: "51px",
              }}
              {...register("email")}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            {errors.email && <ErrorMessage error={errors.email.message} />}
            <label
              htmlFor="password"
              className="block mb-2 text-left text-gray-700 pl-12"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="●●●●●●●"
              required
              className="w-72 h-8 mb-6 p-2 border border-gray-300 rounded-full pl-16 bg-gradient-to-b from-white via-white to-opacity-80"
              style={{ width: "350px", height: "51px" }}
              {...register("password")}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
            {errors.password && (
              <ErrorMessage error={errors.password.message} />
            )}
            <p
              className="text-pass mt-2 cursor-pointer text-righ mb-6"
              style={{ color: "#6D5ABB" }}
            >
              Forgot your password?
            </p>

            <button
              type="submit"
              className="w-80 h-14 px- text-white border-none rounded-full cursor-pointer hover:bg-purple-700 focus:outline-none bg-[#967DFC]"
            >
              Sign in
            </button>

            <div className="mt-4 flex items-center justify-center">
              <button
                type="button"
                className="w-80 h-14 px-4 bg-white text-gray-700 border-none rounded-full cursor-pointer flex items-center justify-center hover:bg-blue-600 hover:text-white focus:outline-none"
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
export default RegisterForm;
