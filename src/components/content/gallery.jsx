import React from 'react'
import { HomeParagraph, Title } from '../texties'
import Image from 'next/image';

export default function Gallery() {
  return (
    <section className="psektion bg-slate-200 space-y-5">
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
    </section>
  );
}
