import prisma from "@/prisma/client";
import Image from "next/image";
import Link from "next/link";
const Latest = async () => {
  const news = await prisma.news.findMany({
    take: 2,
    orderBy: {
      createdAt: "desc", // Assuming there's a createdAt field in your news model
    },
  });
  if (news.length === 0) {
    return (
      <div className="p-5 text-center font-bold text-gray-700 dark hover:text-blue-600 dark:hover:text-white transition duration-300 ease-in-out">
        No latest news available.
      </div>
    );
  }
  return (
    <aside className=" space-y-4 ">
      <div
        className={`${
          news[0].image
            ? "overflow-clip object-contain rounded-lg p-6 relative"
            : "p-6 bg-blue-500 overflow-clip rounded-lg"
        }`}
      >
        <h4 className="leading-[40px] text-white">{news[0].title}</h4>
        {news[0].image && <Image fill src={news[0]?.image} className="-z-10" />}
        <Link
          className="flex  text-white items-center gap-4"
          href={`/News/${news[0].id}`}
        >
          see more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="11"
            viewBox="0 0 26 11"
            fill="none"
          >
            <path
              d="M0.801514 4.63142C0.438577 4.63142 0.144358 4.92564 0.144358 5.28857C0.144358 5.65151 0.438577 5.94573 0.801514 5.94573V4.63142ZM24.9238 5.75325C25.1804 5.49662 25.1804 5.08053 24.9238 4.82389L20.7417 0.641781C20.4851 0.385146 20.069 0.385146 19.8123 0.641781C19.5557 0.898416 19.5557 1.3145 19.8123 1.57114L23.5298 5.28857L19.8123 9.00601C19.5557 9.26264 19.5557 9.67873 19.8123 9.93537C20.069 10.192 20.4851 10.192 20.7417 9.93537L24.9238 5.75325ZM0.801514 5.94573H24.4591V4.63142H0.801514V5.94573Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
      <div
        className={`${
          news[1].image
            ? "overflow-clip object-contain rounded-lg p-6 relative"
            : "p-6 hover:bg-yellow-300 bg-yellow-400 overflow-clip rounded-lg"
        }`}
      >
        <h4 className="leading-[40px] text-white">{news[1].title}</h4>
        {news[1].image && <Image fill src={news[1]?.image} className="-z-10" />}
        <Link
          className="flex  text-white hover:text-slate-700 items-center gap-4"
          href={`/News/${news[1].id}`}
        >
          see more
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="11"
            viewBox="0 0 26 11"
            fill="none"
          >
            <path
              d="M0.801514 4.63142C0.438577 4.63142 0.144358 4.92564 0.144358 5.28857C0.144358 5.65151 0.438577 5.94573 0.801514 5.94573V4.63142ZM24.9238 5.75325C25.1804 5.49662 25.1804 5.08053 24.9238 4.82389L20.7417 0.641781C20.4851 0.385146 20.069 0.385146 19.8123 0.641781C19.5557 0.898416 19.5557 1.3145 19.8123 1.57114L23.5298 5.28857L19.8123 9.00601C19.5557 9.26264 19.5557 9.67873 19.8123 9.93537C20.069 10.192 20.4851 10.192 20.7417 9.93537L24.9238 5.75325ZM0.801514 5.94573H24.4591V4.63142H0.801514V5.94573Z"
              fill="white"
            />
          </svg>
        </Link>
      </div>
    </aside>
  );
};

export default Latest;
