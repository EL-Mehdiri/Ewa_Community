import Image from "next/image";
import Link from "next/link";

const Banner = () => {
  return (
    <>
      <div className="bg-[#FE8174] p-10 rounded-lg">
        <div className="flex justify-between">
          <h2 className="leading-[60px] text-white">
            Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing
            elit?
          </h2>
          <Image src={"/Vector.png"} width={258} height={254} alt="avarat" />
        </div>
        <button>
          <Link
            className="bg-white rounded-full cursor-pointer text-[#967DFC]  px-8 py-4"
            href={"/SharingLink/newLink"}
          >
            Create
          </Link>
        </button>
      </div>
      <div className="text-center text-[#51535A] p-4">
        <h4>Recent Ideas</h4>
      </div>
    </>
  );
};

export default Banner;
