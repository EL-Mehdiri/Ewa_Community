import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const loading = () => {
  return (
    <div className="prose  prose-Slate bg-red-50 p-6 rounded-lg">
      <SkeletonTheme baseColor="#202020" highlightColor="#222666">
        <Skeleton width="8rem" />
        <Skeleton count={4} />
        <Skeleton width="3rem" />
      </SkeletonTheme>
    </div>
  );
};

export default loading;
