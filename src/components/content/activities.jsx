"use client";

import React, {  } from "react";
import { HomeParagraph, Title } from "../texties";
import { Button } from "../ui/button";
import { ActivitiesCards } from "../cards";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import useFetchAll from "@/hooks/useFetchAll";
import { truncateDescription } from "@/lib/utils";
import SkeletonOne from "../skeletonOne";
import Link from "next/link";

export default function Activities() {
 
  const { isLoading, data } = useFetchAll("Activities");

  //for slider
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
      <div className="respons sektion md:grid-cols-3">
        <div className="md:px-5  content-center">
          <Title
            place="start"
            subHeading="Activity Programs"
            first="Smart Activities"
          />
          <HomeParagraph
            place=" "
            content="Fun and educational activities that stimulate cognitive development and problem-solving skills."
          />
          <div className=" flex items-center justify-center md:justify-start ">
            <Button
              asChild
              className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
            >
              <Link href="/activities">View More</Link>
            </Button>
          </div>
        </div>
        <div className="col-span-2" data-aos="fade-left">
          <div className="md:pt-10"></div>
          <div className="slider-container">
            <Slider {...settings}>
              {isLoading
                ? // Render 3 skeletons
                  Array.from({ length: 3 }).map((_, index) => (
                    <SkeletonOne key={index} />
                  ))
                : data.map((activity) => (
                    <ActivitiesCards
                      href={`/activities/${activity.slug}`}
                      key={activity.id}
                      src={activity.img}
                      title={activity.title}
                      desc={truncateDescription(activity.desc, 10)}
                      data-aos="zoom-in" // Adding AOS animation to each card
                    />
                  ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
}
