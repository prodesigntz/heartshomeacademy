import React from "react";
import { HeaderTitle, HomeParagraph } from "../texties";
import { Button } from "../ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative psektion text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center  bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="respons sektion md:grid-cols-2 md:py-10">
        <div className="">
          <HeaderTitle
            place="start"
            subHeading="Building Blocks for Dreams"
            first="A Brighter Future For All Children"
          />
          <HomeParagraph
            place="start"
            content=" 
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe incidunt perspiciatis minima nam molestiae, ex sapiente nostrum a repellat alias dolores qui facere, rerum sequi impedit optio, minus aut. "
          />
          <div className=" flex items-center space-x-5">
            <Button className="rounded-full text-xl p-6 bg-heartssecondary md:border-heartssecondary">
              Enroll Now
            </Button>
            <Button
              variant="outline"
              className="rounded-full text-xl p-6 hover:bg-heartssecondary bg-transparent hover:border-heartssecondary hover:text-white"
            >
              Get Intouch
            </Button>
          </div>
        </div>

        <div>2</div>
      </div>

      {/* clouds */}
      
      {/* <Image
        src="/images/fontfed/wavecloud.png"
        alt="blog"
        fill
        className="absolute  bg-red-500 bottom-5 object-fill w-full max-h-20 rounded-none"
      /> */}
    </section>
  );
}
