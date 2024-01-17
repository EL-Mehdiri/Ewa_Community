"use client";

import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { NewsSchema } from "@/app/api/validationSchemas";
import ErrorMessage from "@/app/components/ErrorMessage";
import Spinner from "@/app/components/Spinner";
import SimpleMDE from "react-simplemde-editor";
import SideBare from "@/app/components/mainPage/SideBare";
import toast from "react-hot-toast";
const ArticleForm = ({ article, userId }) => {
  const {
    register,
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NewsSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [file, setFile] = useState();

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);

      const formData = new FormData();

      // Append form fields
      formData.append("title", data.title);
      formData.append("content", data.content);
      formData.append("userId", userId);

      // Append file
      if (file) {
        formData.append("file", file);
      }
      if (article) {
        await axios.patch("/api/news/" + article.id, formData);
      } else {
        await axios.post("/api/news", formData);
      }

      router.push("/News");
      router.refresh();
      toast.success("new article");
    } catch (error) {
      setIsSubmiting(false);
      setError("Error submitting article");
      toast.error("Error submitting article");
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
            <form
              onSubmit={onSubmit}
              encType="multipart/form-data"
              className="flex flex-col"
            >
              {error && <ErrorMessage error={error} />}

              <input
                type="text"
                defaultValue={article?.title}
                placeholder="title"
                {...register("title")}
              />

              {errors.title && <ErrorMessage error={errors.title.message} />}

              <Controller
                name="content"
                control={control}
                defaultValue={article?.content}
                render={({ field }) => (
                  <SimpleMDE placeholder="description" {...field} />
                )}
              />
              <input
                type="file"
                name="file"
                onChange={(e) => setFile(e.target.files?.[0])}
              />
              {errors.content && (
                <ErrorMessage error={errors.content.message} />
              )}
              <button disabled={isSubmiting}>
                {article ? "Update Article" : "New Article"}{" "}
                {isSubmiting && <Spinner />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleForm;
