"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DropdownMenu from "./DropdownMenu";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

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
      <p className="text-gray-700 ">
        <Link href="/SharingLink">Sharing Link</Link>
      </p>
      <div className="flex ml-auto items-center gap-4 ">
        {status === "loading" && <Skeleton width="3rem" />}
        {status === "authenticated" && (
          <>
            <DropdownMenu
              name={session?.user?.name}
              email={session?.user?.email}
              image={session?.user?.image}
            />
            <p>{session?.user?.name}</p>
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
