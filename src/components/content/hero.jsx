import React from "react";
import { HeaderTitle, HomeParagraph } from "../texties";
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative psektion text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center  bg-slate-700/30 bg-blend-overlay bg-no-repeat">
      <div className="respons sektion md:grid-cols-5 md:py-10">
        <div></div>
        <div className="col-span-3">
          <HeaderTitle
            place="start"
            subHeading="Building Blocks for Dreams"
            first="A Brighter Future For All Children"
          />
          <HomeParagraph
            place=""
            content="Empowering young minds with the foundation to achieve their dreams and aspirations. Committed to providing every child with the opportunities and support for a successful future."
          />
          <div className=" flex items-center space-x-5">
            <Button
              asChild
              className="rounded-full text-xl p-6 bg-heartssecondary md:border-heartssecondary"
            >
              <Link href="/enroll" className="">
                Enroll Now
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="rounded-full text-xl p-6 hover:bg-heartssecondary bg-transparent hover:border-heartssecondary hover:text-white"
            >
              <Link href="/contact" className="">
                {" "}
                Get Intouch
              </Link>
            </Button>
          </div>
        </div>

        <div></div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" aria-hidden="true" />
    </section>
  );
}
