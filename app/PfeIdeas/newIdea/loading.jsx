import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewLoadingIdea = () => {
  return (
    <div className=" max-w-xl  p-1 m-1">
      <form className="flex flex-col">
        <Skeleton />

        <Skeleton height="20rem" />

        <button>
          <Skeleton width="4rem" />
        </button>
      </form>
    </div>
  );
};

export default NewLoadingIdea;
