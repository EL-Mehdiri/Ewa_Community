"use client";
import React from "react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";

import DropdownMenu from "./DropdownMenu";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import SearchBare from "./SearchBar";

const NavBar = () => {
  const { status, data: session } = useSession();

  return (
    <header className=" bg-white p-5 ">
      <div className="container flex   mx-auto justify-between  items-center">
        <Link href="/">
          <Image src="/Logo.svg" width={116} height={39} alt="logo" />
        </Link>

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
