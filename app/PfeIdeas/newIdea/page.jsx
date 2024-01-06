"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";

const page = () => {
  const { register, control, handleSubmit } = useForm();
  const router = useRouter();
  return (
    <form
      onSubmit={handleSubmit(async (data) => {
        await axios.post("/api/pfeIdeas", data);
        router.push("/PfeIdeas");
        router.refresh();
      })}
      className="flex flex-col max-w-xl "
    >
      <input type="text" placeholder="title" {...register("title")} />
      <Controller
        name="content"
        control={control}
        render={({ field }) => (
          <SimpleMDE placeholder="description" {...field} />
        )}
      />

      <button>Submit</button>
    </form>
  );
};

export default page;
