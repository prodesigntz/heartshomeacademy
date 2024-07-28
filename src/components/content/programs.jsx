"use client";

import React from "react";
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image'
import { truncateDescription } from "@/lib/utils";
import SkeletonOne from "../skeletonOne";
import Link from "next/link";
import useFetchAll from "@/hooks/useFetchAll";

export default function Programs() {
  //states
  // const [data, setData] = useState([]);
   //const [loading, setLoading] = useState(true);
   const { isLoading, data } = useFetchAll("Programs");

   //console.log("Programs displayed here...",data)

  
  return (
    <section className="psektion bg-[#ffefe2]">
      <div className="respons space-y-10">
        {/* top column */}
        <div className="sektion md:grid-cols-3">
          <div
            className="hidden md:grid place-content-center "
            data-aos="fade-right"
          >
            <Image
              src="/images/fontfed/pencil_boy.png"
              alt="blog"
              height="120"
              width="120"
              className="object-contain max-w-full max-h-40 rounded-md"
            />
          </div>
          <div>
            <Title
              place=""
              subHeading="Education Programs"
              first="Step By Step Systematic Education"
            />
            <HomeParagraph
              place=" md:text-center"
              content="Structured learning that builds on each child's progress to ensure continuous development."
            />
          </div>
          <div
            className="hidden md:grid place-content-center"
            data-aos="fade-left"
          >
            <Image
              src="/images/fontfed/pencil_girl.png"
              alt="blog"
              height="120"
              width="120"
              className="object-contain max-w-full max-h-40 rounded-md"
            />
          </div>
        </div>

        {/* bottom column */}
        <div className="flex flex-col space-y-10">
          <div className="sektion md:grid-cols-3">
            {/* card one */}

            {isLoading
              ? Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonOne key={index} />
                ))
              : data.slice(0, 3).map((prog) => (
                  <div
                    key={prog.id}
                    className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5"
                  >
                    <div>
                      <Image
                        src={prog.img}
                        alt={prog.title}
                        width={280}
                        height={260}
                        style={{
                          maxWidth: "100%",
                          height: "160px",
                          objectFit: "cover",
                        }}
                        className=" max-w-full max-h-50 rounded-md"
                      />
                    </div>
                    <div className="flex flex-col space-y-3">
                      <h2 className="text-2xl fredoka hover:text-heartsprimary">
                        <Link href={`/programs/${prog.slug}`}>
                          {prog.title}
                        </Link>
                      </h2>
                      <h3 className="">{prog.age}</h3>
                      <p className="">{truncateDescription(prog.desc, 10)}</p>
                    </div>
                  </div>
                ))}
          </div>
          <div className=" flex items-center justify-center ">
            <Button
              asChild
              className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
            >
              <Link href="/programs">View More</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
