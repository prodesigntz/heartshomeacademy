import Accomplishment from '@/components/content/accomplishment'
import Programs from '@/components/content/programs'
import Team from '@/components/team';
import { HomeParagraph, Title } from '@/components/texties';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaBaby } from 'react-icons/fa6';

export default function About() {
  return (
    <main className="psektion  bg-gradient-to-t from-[#ffefe2] to-white">
      {/* About | History */}
      <div className="respons sektion md:grid-cols-5 mb-10 ">
        {/* image introduction */}
        <div className="md:col-span-2 place-content-center ">
          <div className="hidden md:block" data-aos="zoom-in">
            <Image
              src="/images/fontfed/write-child.png"
              alt="blog"
              height="480"
              width="460"
              className=" max-w-full max-h-100 rounded-md"
            />
          </div>
        </div>

        {/* Introduction about */}
        <div className="col-span-2 ">
          <Title
            place="start "
            subHeading="About Us"
            first="We Educate Knowledge & Essential Skills!"
          />
          <HomeParagraph
            place="start"
            content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe incidunt perspiciatis minima nam molestiae, ex sapiente nostrum a repellat alias dolores qui facere, rerum sequi impedit optio, minus aut. "
          />
          <div className=" flex items-center space-x-5">
            <Button
              asChild
              className="rounded-full text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
            >
              <Link href="/enroll">Enroll Now</Link>
            </Button>
          </div>
        </div>

        {/* Introudction  inspiring */}
        <div className="hidden md:grid content-center">
          <Image
            src="/images/fontfed/hand-shake-resized.png"
            alt="blog"
            height="210"
            width="120"
            className=" max-w-full max-h-80 rounded-md"
          />
        </div>
      </div>

      {/* core valuyes */}
      <div className="respons mb-10">
        <div className="sektion md:grid-cols-3">
          {/* card one */}
          <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5">
           
            <div className="flex flex-col space-y-3">
              <div className="flex items-center">
                <div>
                  <FaBaby className="text-3xl"/>
                </div>
                <div>
                  <h2 className="text-2xl fredoka">1</h2>
                  <h3 className="font-bold fredoka">
                    Nurturing Curiosity and Creativity
                  </h3>
                </div>
              </div>
              <p className="text-sm">
                We believe in fostering a love for learning by nurturing
                curiosity and creativity in every child. We provide a
                stimulating environment where children are encouraged to
                explore, ask questions, and express their ideas freely.
              </p>
            </div>
          </div>

          {/* card one */}
          <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5">
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
          </div>

          {/* card one */}
          <div className="flex items-center justify-between rounded-3xl p-10 bg-white shadow-md space-x-5">
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
          </div>
        </div>
      </div>

      {/* teams */}
      <Team />

      {/* accomplishment */}
      <div className="my-10 md:my-20">
        <Accomplishment />
      </div>

      {/* programs */}
      <Programs />
    </main>
  );
}
