"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const DeleteButton = ({ id }) => {
  const router = useRouter();
  return (
    <button
      className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      onClick={async () => {
        try {
          await axios.delete("/api/pfeIdeas/" + id);
          router.push("/PfeIdeas");
          router.refresh();
        } catch (error) {
          console.log("delete error");
        }
      }}
    >
      Delete
    </button>
  );
};

export default DeleteButton;
