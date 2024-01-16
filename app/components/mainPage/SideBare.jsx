"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function SideBare() {
  const pathName = usePathname();
  const links = [
    { title: "News", href: "/News" },
    { title: "Pfe Ideas", href: "/PfeIdeas" },
    { title: "Sharing Link", href: "/SharingLink" },
  ];
  return (
    <aside className="w-fit fixed space-y-4 ">
      <div>
        <Image width={355} height={243} src="/Gif.png" />
      </div>
      <ul className="bg-white p-4 text-center space-y-4 rounded">
        {links.map((link) => (
          <li
            key={link.href}
            className={`${
              link.href == pathName
                ? "bg-[#967DFC] text-white font-medium rounded-full cursor-pointer  p-4"
                : "bg-[#F1F2F4] hover:text-white hover:bg-[#967DFC] font-medium shadow-2xl rounded-full cursor-pointer  p-4"
            }`}
          >
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default SideBare;
