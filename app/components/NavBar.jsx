"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
import Spinner from "./Spinner";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <header className="flex gap-4 p-4  items-center bg-gradient-to-b from-white to-gray-200 shadow">
      <Link href="/" className="text-sky-500">
        Next App
      </Link>
      <p className="text-gray-700 ">
        <Link href="/PfeIdeas">PfeIdeas</Link>
      </p>
      <div className="flex gap-4 ">
        {status === "loading" && (
          <div className="text-black">
            <Spinner />
          </div>
        )}
        {status === "authenticated" && (
          <>
            <p className="text-sky-500">{session?.user?.name}</p>

            <Image
              width={50}
              height={50}
              src={session?.user?.image}
              className="rounded-full"
              alt="logo"
            />
            <Link href="/api/auth/signout" className="text-red-600 ">
              Sign Out
            </Link>
          </>
        )}
      </div>
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"} className="text-green-600 ml-auto">
          Sign In
        </Link>
      )}
    </header>
  );
};

export default NavBar;
