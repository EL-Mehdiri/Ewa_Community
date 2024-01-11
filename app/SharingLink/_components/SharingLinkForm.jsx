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

const SharingLinkForm = ({ link, userId }) => {
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

      data.userId = userId;
      if (link) data.id = link.id;
      if (link) await axios.patch("/api/sharingLink/" + link.id, data);
      else await axios.post("/api/sharingLink", data);
      router.push("/SharingLink");
      router.refresh();
    } catch (error) {
      setIsSubmiting(false);
      setError("error Sharing Link");
      console.log(error);
    }
  });
  return (
    <div className=" max-w-xl  p-1 m-1">
      <form onSubmit={onSubmit} className="flex flex-col">
        {error && <ErrorMessage error={error} />}

        <input
          type="text"
          defaultValue={link?.title}
          placeholder="title"
          {...register("title")}
        />
        {errors.title && <ErrorMessage error={errors.title.message} />}

        <Controller
          name="content"
          control={control}
          defaultValue={link?.content}
          render={({ field }) => (
            <SimpleMDE placeholder="Links..." {...field} />
          )}
        />
        {errors.content && <ErrorMessage error={errors.content.message} />}

        <button disabled={isSubmiting}>
          {link ? "Update Link" : "New Link"} {isSubmiting && <Spinner />}
        </button>
      </form>
    </div>
  );
};

export default SharingLinkForm;
