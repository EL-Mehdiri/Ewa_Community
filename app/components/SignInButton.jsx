"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import Image from "next/image";
const SignInButton = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  return (
    <>
      <div className="flex gap-4 ml-auto">
        <p className="text-sky-500">Next App</p>
        {status === "loading" && <div></div>}
        {status === "authenticated" && (
          <div>
            <p className="text-sky-500">{session?.user?.name}</p>
            <p className="text-sky-500">{session?.user?.email}</p>
            {/* <Image
              width={50}
              height={50}
              src={session?.user?.image}
              className="rounded-full"
              alt="logo"
            /> */}
            <button className="text-red-600">Sign Out</button>
          </div>
        )}
      </div>
      {status === "unauthenticated" && (
        <Link href={"/api/auth/signin"} className="text-green-600 ml-auto">
          Sign In
        </Link>
      )}
      ;
    </>
  );
  // }
};

export default SignInButton;
