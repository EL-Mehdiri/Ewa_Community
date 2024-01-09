import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="prose  prose-Slate bg-red-50 p-6 rounded-lg">
      <Skeleton width="8rem" />
      <Skeleton count={4} />
      <Skeleton width="3rem" />
    </div>
  );
};

export default loading;
