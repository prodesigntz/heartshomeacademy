import React from "react";
import { HomeParagraph, Title } from "../texties";
import Image from "next/image";
import { EventsCards } from "../cards";
import useFetchAll from "@/hooks/useFetchAll";
import SkeletonOne from "../skeletonOne";
import { truncateDescription } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Events() {
  const {isLoading, data, didSucceed} = useFetchAll("Events");
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
    <section className="relative psektion bg-slate-200">
      {/* <Image
        src="/waves/wave-gallerytop.png"
        alt="gallery"
        fill
        className="absolute left-0 right-0 -top-8 object-fill w-full max-h-10 rounded-none"
      /> */}
      <div className="respons space-y-10">
        <div className="sektion md:grid-cols-3">
          <div
            className="hidden md:grid place-content-center"
            data-aos="fade-right"
          >
            <Image
              src="/images/fontfed/jump-kid.png"
              alt="Kid Jumping"
              height="120"
              width="120"
              className="object-contain max-w-full max-h-40 rounded-md"
            />
          </div>
          <div>
            <Title place="" subHeading="Events" first="Our Memories" />
            <HomeParagraph
              place="center"
              content="At Hearts Home Academy, we believe in creating memorable experiences that enrich our children’s learning beyond the classroom."
            />
          </div>
          <div
            className="hidden md:grid place-content-center"
            data-aos="fade-left"
          >
            <Image
              src="/images/fontfed/playing_wally_ball_boy.png"
              alt="Playing"
              height="120"
              width="120"
              className="object-contain max-w-full max-h-40 rounded-md"
            />
          </div>
        </div>

        {/* <div className="sektion2 md:grid-cols-4 gap-3">
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            didSucceed &&
            shuffledImages.slice(0, 8).map((url, index) => (
              <div key={index} className="rounded-md shadow p-2">
                <Image
                  src={url}
                  alt={`Image ${index}`}
                  width={1000}
                  height={240}
                  style={{
                    maxWidth: "100%",
                    height: "220px",
                    objectFit: "cover",
                  }}
                  className="max-w-full max-h-50 rounded-md"
                />
              </div>
            ))
          )}
        </div> */}

        <div className="slider-container">
          <Slider {...settings}>
            {isLoading
              ? Array.from({ length: 4 }).map((_, index) => (
                  <SkeletonOne key={index} />
                ))
              : didSucceed &&
                data
                  .slice(0, 3)
                  .map((tukio) => (
                    <EventsCards
                      key={tukio.id}
                      src={tukio.img}
                      title={tukio.title}
                      desc={truncateDescription(tukio.desc, 10)}
                      href={`/events/${tukio.slug}`}
                      date={tukio.eventDate}
                      days={`${tukio.days} Days`}
                    />
                  ))}
          </Slider>
        </div>

        <div className=" flex items-center justify-center ">
          <Button
            asChild
            className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
          >
            <Link href="/events">View More</Link>
          </Button>
        </div>
      </div>

      <Image
        src="/waves/wave-gallerybottom.png"
        alt="Footer"
        fill
        className="absolute left-0 right-0 -bottom-8 object-fill w-full max-h-10 rounded-none"
      />
    </section>
  );
}
