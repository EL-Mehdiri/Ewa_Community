"use client";

import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { IdeaSchema } from "@/app/api/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import SimpleMDE from "react-simplemde-editor";

const IdaeForm = ({ idea }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(IdeaSchema),
  });

  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
      if (idea) await axios.patch("/api/pfeIdeas/" + idea.id, data);
      else await axios.post("/api/pfeIdeas", data);
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

        <input
          type="text"
          defaultValue={idea?.title}
          placeholder="title"
          {...register("title")}
        />
        {errors.title && <ErrorMessage error={errors.title.message} />}

        <Controller
          name="content"
          control={control}
          defaultValue={idea?.content}
          render={({ field }) => (
            <SimpleMDE placeholder="description" {...field} />
          )}
        />
        {errors.content && <ErrorMessage error={errors.content.message} />}

        <button disabled={isSubmiting}>
          {idea ? "Update Idea" : "New Idea"} {isSubmiting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default IdaeForm;
