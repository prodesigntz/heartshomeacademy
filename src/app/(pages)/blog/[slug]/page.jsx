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
      <div className=" md:-mt-32 bg-white rounded-md">
        <Image
          src="/images/fontfed/content-image-girl-drawing-with-colors-e1672042157790.png"
          alt="blog"
          width={2000} // Replace with actual width
          height={240} // Replace with actual height
          className="h-80 object-cover rounded-md border border-heartssecondary"
        />
      </div>

      {/* title */}
      <div className="font-bold md:text-6xl">Best training for children</div>

      {/* description */}
      <div className="">
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          quibusdam, asperiores et pariatur nobis vero odio neque qui minima
          corrupti. Natus temporibus rem voluptatem porro laboriosam odit at in
          veniam. Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Atque itaque aliquid ipsum minus nostrum? Consectetur reiciendis vero
          aliquam quaerat excepturi, aperiam, inventore, facilis enim voluptatum
          saepe nisi molestias atque dolore!
        </p>
      </div>
    </main>
  );
}
