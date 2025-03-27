import React from 'react';
import { HomeParagraph, Title } from '../texties';
import { Button } from '../ui/button';
import { BlogCards } from "../cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Link from 'next/link';
import useFetchAll from '@/hooks/useFetchAll';
import SkeletonOne from '../skeletonOne';
import { truncateDescription } from '@/lib/utils';

export default function BlogSection() {
    const {isLoading, data} = useFetchAll("Blogpost");

     const settings = {
       dots: true,
       autoplay: true,
       speed: 1000,
       autoplaySpeed: 4000,
       infinite: true,
       slidesToShow: 3,
       slidesToScroll: 1,
       initialSlide: 0,
       arrows: true,
       accessibility: true,
       pauseOnHover: true,
       pauseOnFocus: true,

       responsive: [
         {
           breakpoint: 1024,
           settings: {
             slidesToShow: 3,
             slidesToScroll: 3,
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
          <div></div>
          <div>
            <Title place="" subHeading="Blogs" first="Get Our Updates" />
            <HomeParagraph
              place="center"
              content="Stay informed with the latest happenings, tips, and events at our school."
            />
          </div>
          <div></div>
        </div>

        {/* bottom column */}
        <div className="flex flex-col space-y-10">
          <div className="slider-container">
            <Slider {...settings}>
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
            </Slider>
          </div>
          <div className=" flex items-center justify-center">
            <Button
              asChild
              className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:bg-red-700 hover:shadow-md"
            >
              <Link href="/blog"> View More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
