import React from 'react'
import { HomeParagraph, Title } from '../texties'
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="relative psektion bg-slate-200 space-y-5">
      {/* <div className="absolute left-0 right-0 -top-8 p-10 bg-red-500 bg-[url('/waves/wave-gallerytop.png')] bg-cover bg-center "></div> */}
      <Image
        src="/waves/wave-gallerytop.png"
        alt="blog"
        fill
        className="absolute left-0 right-0 -top-8  object-fill w-full max-h-10 rounded-none"
      />
      <div className="respons">
        {/* top column */}
        <div className="sektion md:grid-cols-3">
          <div
            className="hidden md:grid place-content-center "
            data-aos="fade-right"
          >
            <Image
              src="/images/fontfed/jump-kid.png"
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
              first="Bicultural Students"
            />
            <HomeParagraph
              place="center"
              content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit."
            />
          </div>
          <div
            className="hidden md:grid place-content-center "
            data-aos="fade-left"
          >
            <Image
              src="/images/fontfed/playing_wally_ball_boy.png"
              alt="blog"
              height="120"
              width="120"
              className="object-contain max-w-full max-h-40 rounded-md"
            />
          </div>
        </div>

        {/* grids auto cols */}
        <div className="sektion2  md:grid-cols-4 gap-3">
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
          <div className="rounded-md shadow p-2">
            <Image
              src="/images/fontfed/baby_play.jpg"
              alt="blog"
              width={1000}
              height={240}
              style={{
                maxWidth: "100%",
                height: "220px",
                objectFit: "cover",
              }}
              className=" max-w-full max-h-50 rounded-md"
            />
          </div>
        </div>
      </div>
      <Image
        src="/waves/wave-gallerybottom.png"
        alt="blog"
        fill
        className="absolute left-0 right-0 -bottom-8  object-fill w-full max-h-10 rounded-none"
      />
    </section>
  );
}
