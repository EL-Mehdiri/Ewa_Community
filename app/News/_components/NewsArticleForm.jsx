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
import { UploadButton } from "/app/utils/uploadthing.js";
import toast from "react-hot-toast";
import Image from "next/image";

const ArticleForm = ({ article, userId }) => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(NewsSchema),
  });

  const router = useRouter();
  const [error, setError] = useState("");
  const [isSubmiting, setIsSubmiting] = useState(false);
  const [image, setimageUrl] = useState("");

  const onSubmit = handleSubmit(async (data) => {
    try {
      setIsSubmiting(true);
      if (image) data.image = image;
      data.userId = userId;
      if (article) data.id = article.id;
      if (article) await axios.patch("/api/news/" + article.id, data);
      else await axios.post("/api/news", data);
      router.push("/News");
      router.refresh();
    } catch (error) {
      setIsSubmiting(false);
      setError("error article");
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
              {article?.image && (
                <div className="relative w-full h-[400px] mb-5 ">
                  <Image src={article.image} fill alt="image" />
                </div>
              )}
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
                  <SimpleMDE placeholder="Article..." {...field} />
                )}
              />
              {errors.content && (
                <ErrorMessage error={errors.content.message} />
              )}
              <div className="">
                <UploadButton
                  endpoint="imageUploader"
                  onClientUploadComplete={(res) => {
                    setimageUrl(res[0].url);
                    console.log("Files: ", res[0].url);
                    console.log(image);
                  }}
                  onUploadError={(error) => {
                    // Do something with the error.
                    toast.error(`ERROR! ${error.message}`);
                  }}
                />
                {image.length ? (
                  <div className="p-4 font-semibold text-lg text-center">
                    Image is added
                  </div>
                ) : null}
              </div>
              <button
                disabled={isSubmiting || !image}
                className=" text-white font-medium text-xl border-none cursor-pointer bg-indigo-500  hover:bg-indigo-700 focus:outline-none"
              >
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
