"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";

import DropdownMenu from "./DropdownMenu";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBare from "./SearchBar";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <header className=" bg-white ">
      <div className="container flex   mx-auto justify-between  items-center">
        <Link href="/">L O G O</Link>

        <SearchBare />
        <div className="flex items-center gap-4 ">
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
          {status === "unauthenticated" && (
            <Link href={"/api/auth/signin"} className="text-green-600 ">
              Sign In
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
