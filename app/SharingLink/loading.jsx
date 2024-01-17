import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const LoadingIdeas = () => {
  const ideas = [1, 2, 3, 4, 5, 6];
  return (
    // <div className="grid gap-6 grid-cols-3">
    //   <div className="col-span-2 space-y-10 ">
    //     <div>
    //       <div className="grid grid-cols-3  gap-7 ">
    //         <Skeleton className="col-span-2" count={8} />
    //         <Skeleton className="col-span-1 " height="12rem" />
    //       </div>
    //       <Skeleton width="5rem" />
    //     </div>
    //     {ideas.map((link) => (
    //       <div key={link} className="flex gap-10 w-full">
    //         <Skeleton width="3rem" />
    //         <div className="w-full">
    //           <Skeleton width="10rem" />
    //           <Skeleton count={4} />
    //           <Skeleton width="5rem" />
    //         </div>
    //       </div>
    //     ))}
    //   </div>

    //   <div className="col-span-1 space-y-5">
    //     <div>
    //       <Skeleton count={4} />
    //       <Skeleton width="6rem" />
    //     </div>
    //     <div>
    //       <Skeleton count={4} />
    //       <Skeleton width="6rem" />
    //     </div>
    //   </div>
    // </div>
    <div className="grid place-content-center w-full h-screen">
      <h1>loading....</h1>
    </div>
  );
};

export default LoadingIdeas;
