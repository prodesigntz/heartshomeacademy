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

export default function AddActivity({ params }) {
  const { actId } = useParams();
  // console.log("Activity ID:", actId);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { authUser } = useAppContext();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    age: "",
    //updated
    obj: "",
    duration: "",
    freq: "",
    //updated
    img: null,
    imgPreview: null,
  });

  const router = useRouter();

  // Fetch existing post data if actId is provided
  useEffect(() => {
    if (actId) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          const { didSucceed, document } = await getSingleDocument(
            "Activities",
            actId
          );
          if (didSucceed) {
            setFormData({
              title: document.title,
              desc: document.desc,
              age: document.age,
              //updated
              obj: document.obj,
              duration: document.duration,
              freq: document.freq,
              //updated
              img: document.img || null,
              imgPreview: document.img || null,
            });
          } else {
            setError("Failed to fetch activity data.");
          }
        } catch (fetchError) {
          setError(`Error fetching activity data: ${fetchError.message}`);
        }
        setIsLoading(false);
      };

      fetchPost();
    }
  }, [actId]);

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

  const handleActivitySave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let imageUrl = formData.img;

      if (formData.img && typeof formData.img !== "string") {
        imageUrl = await imageUploadToFirebase(formData.img, "activityImages");
      }

      const slug = getSlug(formData.title);

      const activityData = {
        title: formData.title,
        desc: formData.desc,
        author: authUser?.username || "Anonymous",
        age: formData.age,
        //updated
        obj: formData.obj,
        duration: formData.duration,
        freq: formData.freq,
        //updated
        img: imageUrl,
        updatedAt: new Date().toISOString(),
        slug,
      };

      let result;
      if (actId) {
        result = await updateDocument("Activities", actId, activityData);
      } else {
        activityData.createdAt = new Date().toISOString();
        result = await createDocument(activityData, "Activities");
      }

      if (result.didSucceed) {
        router.push("/cms/dashActivity"); // Replace with your CMS route
      } else {
        setError("Failed to save activity post.");
      }
    } catch (error) {
      console.error("Activity save error:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-2xl font-bold text-center text-slate-700 mb-6">
          {actId ? "Update Activity" : "Create a Activity"}
        </h1>
        <form onSubmit={handleActivitySave}>
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
          {/* obj: document.obj,  */}
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="desc"
            >
              Objective
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="obj"
              placeholder="Enter Ojective Here"
              name="obj"
              value={formData.obj}
              onChange={handleChange}
              required
            />
          </div>

          {/* age */}
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

          {/* duration: document.duration,  */}
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="duration"
            >
              Duration
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="duration"
              type="text"
              placeholder="Duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              required
            />
          </div>

          {/* freq: document.freq, */}
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="freq"
            >
              Activity Frequency
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="freq"
              type="text"
              placeholder="Frequency"
              name="freq"
              value={formData.freq}
              onChange={handleChange}
              required
            />
          </div>

          {/* Featured Image */}
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
                <img
                  src={formData.imgPreview}
                  alt="Current Featured Image"
                  className="h-32 w-48 object-cover"
                />
              </div>
            )}
          </div>

          {/* Error Pop Up */}
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading
                ? actId
                  ? "Updating Activity..."
                  : "Creating Activity..."
                : actId
                ? "Update Activity"
                : "Create Activity"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
