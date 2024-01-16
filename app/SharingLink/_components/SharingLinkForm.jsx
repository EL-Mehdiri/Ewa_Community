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
import SideBare from "@/app/components/mainPage/SideBare";

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
    <div className="p-5  grid container mx-auto grid-cols-4 gap-6">
      <div className="col-span-1 ">
        <SideBare />
      </div>
      <div className="bg-cover col-span-3 bg-center  items-center justify-center">
        <div className=" bg-white p-8 rounded  text-black  shadow-lg">
          <h1 className=" text-[32px] font-medium text-center text-gray-700">
            Start sharing <br /> your content with others
          </h1>
          <div className="form-container mt-8">
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
              {errors.content && (
                <ErrorMessage error={errors.content.message} />
              )}

              <button
                disabled={isSubmiting}
                className=" text-white font-medium text-xl border-none cursor-pointer bg-indigo-500  hover:bg-indigo-700 focus:outline-none"
              >
                {link ? "Update Link" : "New Link"} {isSubmiting && <Spinner />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SharingLinkForm;
