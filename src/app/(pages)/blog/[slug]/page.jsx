"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSingleDocByFieldName } from "@/firebase/databaseOperations";

export default function Page({params}) {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  console.log("Blog Data:", blog);

  useEffect(() => {
    const fetchBlogData = async () => {
      const { didSucceed, document } = await getSingleDocByFieldName(
        "Blogpost",
        slug
      );

      if (didSucceed) {
        setBlog(document);
      } else {
        console.error("Failed to fetch blog post");
      }
    };

    if (slug) {
      fetchBlogData();
    }

    console.log("Blog Data:", blog)
  }, [slug, blog]);

  if (!blog) {
    return <div>Loading...</div>;
  }

  return (
    <main className="psektion respons space-y-10">
      {/* image */}
      <div className="md:-mt-32 bg-white rounded-md">
        <Image
          src={blog.img}
          alt={blog.title}
          width={2000} // Replace with actual width
          height={240} // Replace with actual height
          className="h-80 object-cover rounded-md border border-heartssecondary"
        />
      </div>

      {/* title */}
      <div className="font-bold md:text-6xl">{blog.title}</div>

      {/* description */}
      <div className="">
        <p className="">{blog.description}</p>
      </div>
    </main>
  );
}
