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

export default function AddFacility({ params }) {
  const { facId } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { authUser } = useAppContext();
  const [formData, setFormData] = useState({
    title: "",
    desc: "",
    img: null,
    imgPreview: null,
  });

  const router = useRouter();

  // Fetch existing post data if facId is provided
  useEffect(() => {
    if (facId) {
      const fetchPost = async () => {
        setIsLoading(true);
        try {
          const { didSucceed, document } = await getSingleDocument(
            "Activities",
            facId
          );
          if (didSucceed) {
            setFormData({
              title: document.title,
              desc: document.desc,
              //updated
              img: document.img || null,
              imgPreview: document.img || null,
            });
          } else {
            setError("Failed to fetch facility data.");
          }
        } catch (fetchError) {
          setError(`Error fetching facility data: ${fetchError.message}`);
        }
        setIsLoading(false);
      };

      fetchPost();
    }
  }, [facId]);

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

  const handleFacilitySave = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      let imageUrl = formData.img;

      if (formData.img && typeof formData.img !== "string") {
        imageUrl = await imageUploadToFirebase(formData.img, "facilityImages");
      }

      const slug = getSlug(formData.title);

      const facilityData = {
        title: formData.title,
        desc: formData.desc,
        author: authUser?.username || "Anonymous",
        img: imageUrl,
        updatedAt: new Date().toISOString(),
        slug,
      };

      let result;
      if (facId) {
        result = await updateDocument("Facilities", facId, facilityData);
      } else {
        facilityData.createdAt = new Date().toISOString();
        result = await createDocument(facilityData, "Facilities");
      }

      if (result.didSucceed) {
        router.push("/cms/dashFacilities"); // Replace with your CMS route
      } else {
        setError("Failed to save Facility post.");
      }
    } catch (error) {
      console.error("Facility save error:", error.message);
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-2xl font-bold text-center text-slate-700 mb-6">
          {facId ? "Update Facility" : "Create a Facility"}
        </h1>
        <form onSubmit={handleFacilitySave}>
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

          {/* freq: document.freq, */}

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
                <Image
                  src={formData.imgPreview}
                  alt="Current Featured Image"
                  width={1000}
                  height={240}
                  style={{
                    maxWidth: "20%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                  className=" max-w-full max-h-50 rounded-md"
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
                ? facId
                  ? "Updating facility..."
                  : "Creating facility..."
                : facId
                ? "Update facility"
                : "Create facility"}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
