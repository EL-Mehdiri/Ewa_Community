import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIdeas = () => {
  const ideas = [1, 2, 3, 4, 5, 6];
  return (
    <div className="">
      <div className="">
        {ideas.map((idea) => (
          <div className="mb-6" key={idea}>
            <h2>
              <Skeleton width="5rem" />
            </h2>
            <p>
              <Skeleton count={5} />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LoadingIdeas;
