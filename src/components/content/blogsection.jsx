import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ActivitiesCards, BlogCards } from "../cards";
import { activitiesData } from "@/data/activities";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { blogData } from '@/data/blogData';
import Link from 'next/link';

export default function BlogSection() {
     const settings = {
       dots: true,
       //  autoplay: true,
       speed: 2000,
       autoplaySpeed: 2000,
       //  infinite: true,
       slidesToShow: 3,
       slidesToScroll: 3,
       initialSlide: 0,
       //arrows: false,

       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
             //infinite: true,
             dots: true,
           },
         },
         {
           breakpoint: 600,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 2,
             initialSlide: 2,
           },
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
           },
         },
       ],
     };
  
  return (
    <section className="psektion ">
      <div className="respons">
        {/* top column */}
        <div className="sektion md:grid-cols-3">
          <div>gif</div>
          <div>
            <Title place="" subHeading="Blogs" first="Get Our Updates" />
            <HomeParagraph
              place="center"
              content=" 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div>image</div>
        </div>

        {/* bottom column */}
        <div className="flex flex-col space-y-10">
          <div className="slider-container">
            <Slider {...settings}>
              {blogData.map((blog, id) => (
                <BlogCards
                  key={id}
                  href={`blog/${blog.slug}`}
                  src={blog.img}
                  title={blog.title}
                  shortDesc={blog.shortDesc}
                />
              ))}
            </Slider>
          </div>
          <div className=" flex items-center justify-center">
            <Button asChild className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:bg-red-700 hover:shadow-md">
               <Link href="/blog"> View More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
