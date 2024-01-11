import React from "react";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIdeas = () => {
  const ideas = [1, 2, 3, 4, 5, 6];
  return (
    <div className="">
      <button>
        <Link href="/PfeIdeas/newIdea">New Pfe Idea</Link>
      </button>
      <div className="grid grid-cols-3 gap-10 pt-5">
        {ideas.map((idea) => (
          <div
            className="max-w-xl p-5 bg-white shadow-5 rounded-lg m-1 space-y-5 "
            key={idea}
          >
            <h2 className="">
              <Skeleton />
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
