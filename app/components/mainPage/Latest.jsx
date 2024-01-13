import Image from "next/image";
import Link from "next/link";
const Latest = () => {
  return (
    <aside className=" space-y-4 ">
      <div className="p-6 bg-blue-500 rounded-lg">
        <h4 className="leading-[40px] text-white">
          Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit?
        </h4>
        <Link className="flex  items-center gap-4" href={"/"}>
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
      <div className="p-6 bg-yellow-400 rounded-lg">
        <h4 className="leading-[40px] text-white">
          Lorem ipsum dolor sit <br /> amet, consectetur <br /> adipiscing elit?
        </h4>
        <Link className="flex  items-center gap-4" href={"/"}>
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
