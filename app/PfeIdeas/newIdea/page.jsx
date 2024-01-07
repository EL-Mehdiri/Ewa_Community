"use client";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { createIdeaSchema } from "@/app/api/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";

const page = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createIdeaSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
      await axios.post("/api/pfeIdeas", data);
      router.push("/PfeIdeas");
      router.refresh();
    } catch (error) {
      setIsSubmiting(false);
      setError("error ideas");
    }
  });
  return (
    <div className=" max-w-xl  p-1 m-1">
      <form onSubmit={onSubmit} className="flex flex-col">
        {error && <ErrorMessage error={error} />}

        <input type="text" placeholder="title" {...register("title")} />
        {errors.title && <ErrorMessage error={errors.title.message} />}

        <Controller
          name="content"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        {errors.content && <ErrorMessage error={errors.content.message} />}

        <button disabled={isSubmiting}>
          Submit {isSubmiting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default page;
