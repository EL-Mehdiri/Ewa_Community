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
    <div className="relative " data-te-dropdown-ref>
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
          <div className="w-[50px]  h-[50px] rounded-full bg-gray-300 grid place-content-center">
            ?
          </div>
        )}
      </a>
      <ul
        className="absolute   z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-center text-base shadow-2xl dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
        aria-labelledby="dropdownMenuButton2"
        data-te-dropdown-menu-ref
      >
        <li
          className="flex w-full space-y-4   flex-col items-center  whitespace-nowrap bg-transparent px-4 py-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          data-te-dropdown-item-ref
        >
          {image ? (
            <Image
              width={136}
              height={136}
              src={image}
              className="rounded-full"
              alt="logo"
            />
          ) : (
            <div className="w-[50px] h-[50px] rounded-full bg-gray-300 grid place-content-center">
              ?
            </div>
          )}
          <p className="text-[18.4px] font-medium ">{name}</p>
        </li>

        <li>
          <Link
            className="flex gap-5  text-[16.5px]  font-mediumw-full whitespace-nowrap bg-transparent px-24 py-4  text-neutral-700 hover:bg-[#967DFC] hover:text-white active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
            href="/Settings"
            data-te-dropdown-item-ref
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="22"
              viewBox="0 0 23 22"
              fill="none"
            >
              <g clip-path="url(#clip0_62_1535)">
                <path
                  d="M11.6198 13.5211C13.1133 13.5211 14.324 12.3104 14.324 10.8169C14.324 9.32339 13.1133 8.11267 11.6198 8.11267C10.1263 8.11267 8.91553 9.32339 8.91553 10.8169C8.91553 12.3104 10.1263 13.5211 11.6198 13.5211Z"
                  stroke="#393C48"
                  stroke-width="1.80282"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M18.29 13.5211C18.17 13.793 18.1342 14.0946 18.1873 14.387C18.2403 14.6794 18.3797 14.9492 18.5875 15.1616L18.6416 15.2157C18.8092 15.3832 18.9422 15.582 19.0329 15.8009C19.1236 16.0197 19.1703 16.2543 19.1703 16.4912C19.1703 16.7281 19.1236 16.9627 19.0329 17.1816C18.9422 17.4005 18.8092 17.5993 18.6416 17.7667C18.4741 17.9343 18.2753 18.0673 18.0564 18.158C17.8376 18.2488 17.603 18.2955 17.3661 18.2955C17.1292 18.2955 16.8946 18.2488 16.6757 18.158C16.4568 18.0673 16.258 17.9343 16.0906 17.7667L16.0365 17.7126C15.8241 17.5048 15.5542 17.3654 15.2618 17.3124C14.9694 17.2594 14.6678 17.2952 14.3959 17.4152C14.1293 17.5294 13.9019 17.7192 13.7418 17.961C13.5816 18.2028 13.4957 18.4862 13.4945 18.7763V18.9295C13.4945 19.4077 13.3046 19.8662 12.9665 20.2043C12.6284 20.5424 12.1698 20.7324 11.6917 20.7324C11.2136 20.7324 10.755 20.5424 10.4169 20.2043C10.0788 19.8662 9.88889 19.4077 9.88889 18.9295V18.8484C9.88191 18.55 9.78533 18.2607 9.61172 18.0179C9.4381 17.7752 9.19547 17.5903 8.91537 17.4873C8.64349 17.3673 8.3419 17.3315 8.04949 17.3845C7.75707 17.4375 7.48725 17.5769 7.27481 17.7847L7.22072 17.8388C7.05329 18.0065 6.85446 18.1394 6.6356 18.2302C6.41674 18.3209 6.18215 18.3676 5.94523 18.3676C5.70831 18.3676 5.47372 18.3209 5.25486 18.2302C5.036 18.1394 4.83717 18.0065 4.66974 17.8388C4.50212 17.6714 4.36914 17.4726 4.27842 17.2537C4.18769 17.0349 4.14099 16.8003 4.14099 16.5633C4.14099 16.3264 4.18769 16.0918 4.27842 15.873C4.36914 15.6541 4.50212 15.4553 4.66974 15.2878L4.72382 15.2338C4.93163 15.0213 5.07103 14.7515 5.12405 14.4591C5.17707 14.1667 5.14128 13.8651 5.02128 13.5932C4.90702 13.3266 4.71729 13.0992 4.47545 12.9391C4.23361 12.7789 3.95022 12.6929 3.66016 12.6918H3.50692C3.02878 12.6918 2.57023 12.5018 2.23213 12.1638C1.89404 11.8257 1.7041 11.3671 1.7041 10.889C1.7041 10.4108 1.89404 9.95228 2.23213 9.61419C2.57023 9.2761 3.02878 9.08616 3.50692 9.08616H3.58805C3.88641 9.07918 4.17577 8.9826 4.41851 8.80898C4.66126 8.63536 4.84616 8.39273 4.94917 8.11263C5.06916 7.84076 5.10496 7.53916 5.05194 7.24675C4.99892 6.95434 4.85951 6.68451 4.65171 6.47207L4.59762 6.41799C4.43 6.25055 4.29703 6.05172 4.2063 5.83287C4.11558 5.61401 4.06888 5.37941 4.06888 5.14249C4.06888 4.90558 4.11558 4.67098 4.2063 4.45212C4.29703 4.23326 4.43 4.03443 4.59762 3.867C4.76506 3.69938 4.96389 3.56641 5.18274 3.47568C5.4016 3.38496 5.6362 3.33826 5.87312 3.33826C6.11003 3.33826 6.34463 3.38496 6.56349 3.47568C6.78235 3.56641 6.98118 3.69938 7.14861 3.867L7.20269 3.92109C7.41514 4.12889 7.68496 4.26829 7.97737 4.32131C8.26979 4.37433 8.57138 4.33854 8.84326 4.21855H8.91537C9.18198 4.10428 9.40936 3.91456 9.56951 3.67272C9.72967 3.43088 9.81562 3.14748 9.81678 2.85742V2.70418C9.81678 2.22605 10.0067 1.76749 10.3448 1.4294C10.6829 1.09131 11.1415 0.901367 11.6196 0.901367C12.0977 0.901367 12.5563 1.09131 12.8944 1.4294C13.2325 1.76749 13.4224 2.22605 13.4224 2.70418V2.78531C13.4236 3.07537 13.5095 3.35876 13.6697 3.6006C13.8298 3.84244 14.0572 4.03217 14.3238 4.14644C14.5957 4.26643 14.8973 4.30222 15.1897 4.2492C15.4821 4.19618 15.7519 4.05678 15.9644 3.84897L16.0185 3.79489C16.1859 3.62727 16.3847 3.49429 16.6036 3.40357C16.8224 3.31284 17.057 3.26615 17.294 3.26615C17.5309 3.26615 17.7655 3.31284 17.9843 3.40357C18.2032 3.49429 18.402 3.62727 18.5695 3.79489C18.7371 3.96232 18.87 4.16115 18.9608 4.38001C19.0515 4.59887 19.0982 4.83346 19.0982 5.07038C19.0982 5.3073 19.0515 5.54189 18.9608 5.76075C18.87 5.97961 18.7371 6.17844 18.5695 6.34587L18.5154 6.39996C18.3076 6.6124 18.1682 6.88223 18.1151 7.17464C18.0621 7.46705 18.0979 7.76864 18.2179 8.04052V8.11263C18.3322 8.37924 18.5219 8.60662 18.7637 8.76678C19.0056 8.92694 19.289 9.01289 19.579 9.01404H19.7323C20.2104 9.01404 20.669 9.20398 21.0071 9.54208C21.3451 9.88017 21.5351 10.3387 21.5351 10.8169C21.5351 11.295 21.3451 11.7535 21.0071 12.0916C20.669 12.4297 20.2104 12.6197 19.7323 12.6197H19.6511C19.3611 12.6208 19.0777 12.7068 18.8359 12.8669C18.594 13.0271 18.4043 13.2545 18.29 13.5211Z"
                  stroke="#393C48"
                  stroke-width="1.80282"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_62_1535">
                  <rect
                    width="21.6338"
                    height="21.6338"
                    fill="#393C48"
                    transform="translate(0.802734)"
                  />
                </clipPath>
              </defs>
            </svg>
            Settings
          </Link>
        </li>
        <li>
          <Link
            href="/api/auth/signout"
            className="flex gap-5  text-[16.5px]  font-mediumw-full whitespace-nowrap bg-transparent px-24 py-4  text-neutral-700 hover:bg-[#ff4c4c] hover:text-white active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="23"
              viewBox="0 0 22 23"
              fill="none"
            >
              <path
                d="M13.5212 3.60558L17.1269 3.60558C17.605 3.60558 18.0636 3.79552 18.4017 4.13361C18.7397 4.47171 18.9297 4.93026 18.9297 5.4084L18.9297 18.0281C18.9297 18.5063 18.7397 18.9648 18.4017 19.3029C18.0636 19.641 17.605 19.8309 17.1269 19.8309L13.5212 19.8309"
                stroke="#393C48"
                stroke-width="1.80282"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.21143 7.21126L2.70438 11.7183L7.21143 16.2253"
                stroke="#393C48"
                stroke-width="1.80282"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.70409 11.7183L13.521 11.7183"
                stroke="#393C48"
                stroke-width="1.80282"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Log out
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
