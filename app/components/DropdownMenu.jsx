"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect } from "react";

const DropdownMenu = ({ name, image, email }) => {
  useEffect(() => {
    const init = async () => {
      const { Dropdown, Ripple, initTE } = await import("tw-elements");
      initTE({ Dropdown, Ripple });
    };
    init();
  }, []);
  return (
    <div className="relative" data-te-dropdown-ref>
      <a
        type="button"
        id="dropdownMenuButton2"
        data-te-dropdown-toggle-ref
        aria-expanded="false"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        {image ? (
          <Image
            width={50}
            height={50}
            src={image}
            className="rounded-full"
            alt="logo"
          />
        ) : (
          <div className="w-[50px] h-[50px] rounded-full bg-gray-300 grid place-content-center">
            ?
          </div>
        )}
      </a>
      <ul
        className="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref
      >
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {name}
          </a>
        </li>
        <li>
          <a
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="#"
            data-te-dropdown-item-ref
          >
            {email}
          </a>
        </li>
        <li>
          <Link
            href="/api/auth/signout"
            className="block w-full whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-red-600 hover:bg-gray-300 active:text-red-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-red-400 dark:text-red-200 dark:hover:bg-red-600"
          >
            Sign Out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
