
import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import { ActivitiesCards } from '../cards';
import { activitiesData} from "@/data/activities"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


export default function Activities() {
   const settings = {
     dots: true,
    //  autoplay: true,
     speed: 2000,
     autoplaySpeed: 2000,
    //  infinite: true,
     slidesToShow: 3,
     slidesToScroll: 3,
     initialSlide: 0,
     arrows:false,

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
            place="center"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          />
          <div className=" flex items-center justify-center md:justify-start ">
            <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black">
              View More
            </Button>
          </div>
        </div>
        <div className="col-span-2" data-aos="fade-left">
          <div className="md:pt-10"></div>
          <div className="slider-container">
            <Slider {...settings}>
              {activitiesData.map((activity, id) => (
                <ActivitiesCards
                  key={id}
                  src={activity.img}
                  title={activity.title}
                  desc={activity.desc}
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
