"use client";

import { BlogCards } from "@/components/cards";
import SkeletonOne from "@/components/skeletonOne";
import useFetchAll from "@/hooks/useFetchAll";
import { truncateDescription } from "@/lib/utils";
import React from "react";

export default function Blog() {
  const { isLoading, data } = useFetchAll("Blogpost");

  return (
    <main className="psektion">
      <div className="respons sektion md:grid-cols-3">
        {isLoading
          ? // Render 3 skeletons
            Array.from({ length: 3 }).map((_, index) => (
              <SkeletonOne key={index} />
            ))
          : data.map((blog) => (
              <BlogCards
                key={blog.id}
                href={`blog/${blog.slug}`}
                src={blog.img}
                title={blog.title}
                shortDesc={truncateDescription(blog.desc, 12)}
              />
            ))}
      </div>
    </main>
  );
}
