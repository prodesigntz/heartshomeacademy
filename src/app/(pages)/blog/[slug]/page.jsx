"use client";

import { blogData } from '@/data/blogData';
import Image from 'next/image';
import { useParams } from 'next/navigation'
import React from 'react'

export default function page({ params }) {
  const { slug } = useParams();

  // Find the blog post based on the slug
  const blog = blogData.find((blog) => blog.slug === slug);

  // console.log(blogSlug);

  return (
    <main className="psektion respons space-y-10">
      {/* image */}
      <div className="">
        <Image
          src={blog.img}
          alt="blog"
          width={2000} // Replace with actual width
          height={200} // Replace with actual height
          className="h-80 object-cover rounded-md"
        />
      </div>

      {/* title */}
      <div className="font-bold md:text-6xl">{blog.title}</div>

      {/* description */}
      <div className="">{blog.desc}</div>
    </main>
  );
}
