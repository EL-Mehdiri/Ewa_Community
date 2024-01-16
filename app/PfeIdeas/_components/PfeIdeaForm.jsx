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
import toast from "react-hot-toast";
import SideBare from "@/app/components/mainPage/SideBare";

const IdaeForm = ({ idea, userId }) => {
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
      if (idea) data.id = idea.id;
      if (idea) await axios.patch("/api/pfeIdeas/" + idea.id, data);
      else await axios.post("/api/pfeIdeas", data);
      router.push("/PfeIdeas");
      router.refresh();
      toast.success(idea ? "Successfully Updated!" : "Successfully created");
    } catch (error) {
      setIsSubmiting(false);
      // toast error

      toast.error("An Error Occurred! Please Try Again Later.");
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
                className=" w-full px-4 py-2 bg-gray-200 border-0 rounded focus:outline-none focus:bg-gray-300 pl-11 mb-4"
                defaultValue={idea?.title}
                placeholder="title"
                {...register("title")}
              />
              {errors.title && <ErrorMessage error={errors.title.message} />}
              <Controller
                name="content"
                className=" w-full px-4 py-2 bg-gray-200 border-0 rounded focus:outline-none focus:bg-gray-300 pl-11 mb-14"
                control={control}
                defaultValue={idea?.content}
                render={({ field }) => (
                  <SimpleMDE placeholder="description" {...field} />
                )}
              />
              {errors.content && (
                <ErrorMessage error={errors.content.message} />
              )}

              <button
                className=" text-white font-medium text-xl border-none cursor-pointer bg-indigo-500  hover:bg-indigo-700 focus:outline-none"
                disabled={isSubmiting}
              >
                {idea ? "Update Idea" : "New Idea"} {isSubmiting && <Spinner />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdaeForm;
