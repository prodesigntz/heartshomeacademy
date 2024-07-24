import React from "react";
import { HomeParagraph, Title } from "../texties";
import Image from "next/image";
import useFetchMultipleJoin from "@/hooks/useFetchMultipleJoin";

export default function Gallery() {
  const { isLoading, didSucceed, data } = useFetchMultipleJoin([
    "Activities",
    "Facilities",
    "Programs",
    "Blogpost",
  ]);

  // Extract image URLs from the data
  const images = data.map((item) => item.img).filter((url) => url); // Adjust based on your data structure

  // Shuffle images for random display
  const shuffledImages = images.sort(() => 0.5 - Math.random());

  return (
    <section className="relative psektion bg-slate-200 space-y-5">
      <Image
        src="/waves/wave-gallerytop.png"
        alt="gallery"
        fill
        className="absolute left-0 right-0 -top-8 object-fill w-full max-h-10 rounded-none"
      />
      <div className="respons">
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
            <Title place="" subHeading="Gallery" first="Our Memories" />
            <HomeParagraph
              place="center"
              content="Visual snapshots of our vibrant and enriching school activities and events."
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

        <div className="sektion2 md:grid-cols-4 gap-3">
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
