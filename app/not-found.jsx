import React from "react";

const notFound = () => {
  return (
    <div className="grid place-content-center text-[34px] font-semibold uppercase text-[#393C48] h-screen">
      <div className="flex items-center gap-10">
        <h1 className=" text-[283px] tracking-[-35px] p-5 bg-gradient-to-r from-[#21CFA9] to-[#967DFC] text-transparent bg-clip-text">
          404
        </h1>
        <div className=" bg-[#393C48] h-full w-1" />
        <div>
          <h3 className="text-[68px] mb-4">ooops!</h3>

          <p>
            The page you were <br /> looking for doesn’t <br /> exist!
          </p>
        </div>
      </div>
    </div>
  );
};

export default notFound;
