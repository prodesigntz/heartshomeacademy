"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { getSingleDocByFieldNameOrg } from "@/firebase/databaseOperations";
import SkeletonOne from "@/components/skeletonOne";

export default function Page({params}) {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (!slug) {
        console.error("No slug provided");
        return;
      }

      try {
        const { didSucceed, document } = await getSingleDocByFieldNameOrg(
          "Blogpost",
          "slug",
          slug
        );

        console.log("Document Data: ", document);

        if (didSucceed) {
          setBlog(document);
        } else {
          console.error("Failed to fetch blog post");
        }
      } catch (error) {
        console.error("Error fetching blog post:", error);
      }
    };

    fetchBlogData();
  }, [slug]);

  if (!blog) {
    return <div className="psektion respons"><SkeletonOne/></div>;
  }

  return (
    <main className="psektion respons space-y-10">
      {/* image */}
      <div className="md:-mt-32 bg-white rounded-md">
        <Image
          src={blog.img}
          alt={blog.title}
          width={2000} // Replace with actual width
          height={340} // Replace with actual height
          className="h-96 object-cover rounded-md border border-heartssecondary"
        />
      </div>

      {/* title */}
      <div className="font-bold md:text-6xl">{blog.title}</div>

      {/* description */}
      <div className="">
        <p className="">{blog.desc}</p>
      </div>
    </main>
  );
}
