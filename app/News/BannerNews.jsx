import Image from "next/image";
import Link from "next/link";

const BannerNews = ({ href, maintext, text }) => {
  return (
    <>
      <div
        className={` relative h-[492px] bg-gradient-to-r   from-[#967dfc86] to-[#00000000]  p-10 rounded-lg`}
      >
        <div className="flex  justify-between">
          <h3 className="leading-[60px] p-10 relative z-10 text-white">
            Breaking News <br />
            in the <br />
            EWA Community: <br />
            <span className="text-[#660adfbe]"> What You Need to Know</span>
          </h3>

          <Image src={"/Mask group.png"} className="-z-10" fill alt="bg" />
        </div>
        <button>
          <Link
            className="bg-white rounded-full cursor-pointer text-[#967DFC]  px-8 py-4"
            href={href}
          >
            Create {text}
          </Link>
        </button>
      </div>
      <div className="text-center text-[#51535A] p-4">
        <h4>Recent {text}</h4>
      </div>
    </>
  );
};

export default BannerNews;
