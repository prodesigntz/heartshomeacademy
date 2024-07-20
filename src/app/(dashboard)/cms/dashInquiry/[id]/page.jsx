"use client";

import React, { useEffect, useState } from "react";
import { useAppContext } from "@/context/AppContext";
import { useParams, useRouter } from "next/navigation";
import {
  createDocument,
  updateDocument,
  getSingleDocument,
} from "@/firebase/databaseOperations";
import { imageUploadToFirebase } from "@/firebase/fileOperations";
import { getSlug } from "@/lib/utils";
import Image from "next/image";

export default function AddPrograms({ params }) {
  const { progId } = useParams();
  // console.log("Program ID:", progId);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { authUser } = useAppContext();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    age: "",
    img: null,
    imgPreview: null,
  });

  const router = useRouter();

  // Fetch existing post data if progId is provided
  useEffect(() => {
    if (progId) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          const { didSucceed, document } = await getSingleDocument(
            "Programs",
            progId
          );
          if (didSucceed) {
            setFormData({
              title: document.title,
              desc: document.desc,
              age: document.age,
              img: document.img || null,
              imgPreview: document.img || null,
            });
          } else {
            setError("Failed to fetch program data.");
          }
        } catch (fetchError) {
          setError(`Error fetching program data: ${fetchError.message}`);
        }
        setIsLoading(false);
      };

      fetchPost();
    }
  }, [progId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgPreview = URL.createObjectURL(file);
      setFormData({ ...formData, img: file, imgPreview });
    }
  };

  const handleProgramSave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let imageUrl = formData.img;

      if (formData.img && typeof formData.img !== "string") {
        imageUrl = await imageUploadToFirebase(formData.img, "programImages");
      }

      const slug = getSlug(formData.title);

      const programData = {
        title: formData.title,
        desc: formData.desc,
        author: authUser?.username || "Anonymous",
        age: formData.age,
        img: imageUrl,
        updatedAt: new Date().toISOString(),
        slug,
      };

      let result;
      if (progId) {
        result = await updateDocument("Programs", progId, programData);
      } else {
        programData.createdAt = new Date().toISOString();
        result = await createDocument(programData, "Programs");
      }

      if (result.didSucceed) {
        router.push("/cms/dashPrograms"); // Replace with your CMS route
      } else {
        setError("Failed to save program post.");
      }
    } catch (error) {
      console.error("Program save error:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-2xl font-bold text-center text-slate-700 mb-6">
          {progId ? "Update Program" : "Create a Program"}
        </h1>
        <form onSubmit={handleProgramSave}>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="title"
            >
              Title
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"
              placeholder="Enter Title Here"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="desc"
            >
              Content
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="desc"
              placeholder="Enter Content Here"
              name="desc"
              value={formData.desc}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="age"
            >
              Age
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="age"
              type="text"
              placeholder="Age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="img"
            >
              Featured Image
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="img"
              type="file"
              onChange={handleImageChange}
            />
            {formData.imgPreview && (
              <div className="mt-2">
                <Image
                  src={formData.imgPreview}
                  alt="Current Featured Image"
                  fill
                  className="h-32 w-48 object-cover"
                />
              </div>
            )}
          </div>

          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? progId
                  ? "Updating Program..."
                  : "Creating Program..."
                : progId
                ? "Update Program"
                : "Create Program"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
