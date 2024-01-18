import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className="grid place-content-center w-full h-screen">
      <Image src="/icon.svg" width={116} height={39} alt="logo" />
    </div>
  );
};

export default loading;
