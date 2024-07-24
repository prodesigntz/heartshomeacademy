import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { FacilitiesCards } from '../cards'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { facilitiesData } from '@/data/facilitiesData'
import Image from 'next/image';
import useFetchAll from '@/hooks/useFetchAll';
import SkeletonOne from '../skeletonOne';
import { truncateDescription } from '@/lib/utils';

export default function Facilities() {

  const {isLoading, data} = useFetchAll("Facilities")

   const settings = {
     dots: true,
     //  autoplay: true,
     speed: 2000,
     autoplaySpeed: 2000,
     //  infinite: true,
     slidesToShow: 4,
     slidesToScroll: 4,
     initialSlide: 0,

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
    <section className="psektion respons space-y-10 ">
      {/* top column */}
      <div className="sektion md:grid-cols-3">
        <div
          className="hidden md:grid place-content-center"
          data-aos="fade-right"
        >
          <Image
            src="/images/fontfed/icon-baby-girl-diving.png"
            alt="blog"
            height="120"
            width="120"
            className="object-contain max-w-full max-h-40 rounded-md"
          />
        </div>

        <div>
          <Title
            place=""
            subHeading="School Facilities"
            first="Engaging & Spacious School Campus"
          />
          <HomeParagraph
            place="center"
            content="A vibrant and expansive campus designed for active learning and exploration."
          />
        </div>

        <div
          className="hidden md:grid place-content-center"
          data-aos="fade-left"
        >
          <Image
            src="/images/fontfed/cycle-play.png"
            alt="blog"
            height="120"
            width="120"
            className="object-contain max-w-full max-h-40 rounded-md"
          />
        </div>
      </div>

      {/* bottom collumn */}
      <div className="slider-container">
        <Slider {...settings}>
          {isLoading
            ? // Render 3 skeletons
              Array.from({ length: 4 }).map((_, index) => (
                <SkeletonOne key={index} />
              ))
            : data.map((facility, id) => (
                <FacilitiesCards
                  key={id}
                  src={facility.img}
                  title={facility.title}
                  desc={truncateDescription(facility.desc, 12)}
                  data-aos="zoom-in" // Adding AOS animation to each card
                />
              ))}
        </Slider>
      </div>
    </section>
  );
}
