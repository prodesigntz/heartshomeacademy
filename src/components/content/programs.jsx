"use client";

import React, { useState, useEffect } from "react";
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image'
import { fetchDocuments } from '@/firebase/databaseOperations'
import { truncateDescription } from "@/lib/utils";
import SkeletonOne from "../skeletonOne";

export default function Programs() {
  //states
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

  //Querrying the data from database
  useEffect(() => {

    //function to fetch documents
    const fetchData = async () => {
      //access fetch documents
      const { didSucceed, items } = await fetchDocuments("Programs");
      console.log("data here....", items);

      if (didSucceed) {
        setData(items.slice(0, 3)); // Only take the first 3 items
        setLoading(false);
      } else {
        console.error("Failed to fetch data");
      }
    };
    
    fetchData();

  }, []);
  
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
              place="center"
              content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit."
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

            {loading ? (
              // Render 3 skeletons
                Array.from({ length: 3 }).map((_, index) => (
                  <SkeletonOne key={index} />
                ))
              ) : ( 
                data.map((prog) => (
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
                        {prog.title}
                      </h2>
                      <h3 className="">{prog.age}</h3>
                      <p className="">{truncateDescription(prog.desc, 12)}</p>
                    </div>
                  </div>
                ))
                )}

            {/* card one */}
            {/* <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5">
              <div className="">
                <Image
                  src="/images/heros/bghero.jpg"
                  alt="blog"
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
                <h2 className="text-2xl fredoka">Infants</h2>
                <h3 className="">6 - 24 Months</h3>
                <p className="">
                  Eu turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div> */}

            {/* card one */}
            {/* <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5">
              <div className="">
                <Image
                  src="/images/heros/bghero.jpg"
                  alt="blog"
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
                <h2 className="text-2xl fredoka">Infants</h2>
                <h3 className="">6 - 24 Months</h3>
                <p className="">
                  Eu turpis egestas pretium aenean pharetra magna ac.
                </p>
              </div>
            </div> */}
          </div>
          <div className=" flex items-center justify-center ">
            <Button className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black">
              View More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
