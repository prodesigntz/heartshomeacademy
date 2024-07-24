import Accomplishment from '@/components/content/accomplishment'
import Programs from '@/components/content/programs'
import Team from '@/components/team';
import { HomeParagraph, Title } from '@/components/texties';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaShieldAlt } from 'react-icons/fa';
import { FaBaby, FaPuzzlePiece } from 'react-icons/fa6';

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
            content="Highly qualified educators providing personalized and engaging learning experiences for young minds."
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
              <div className="flex items-center space-x-5">
                {/* <div>
                 <h2 className="text-2xl fredoka">1</h2> 
                </div> */}
                <div className="space-y-5">
                  <FaBaby className="text-3xl md:text-6xl" />
                  <h3 className="font-bold fredoka md:text-xl">
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
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-5">
                {/* <div>
                 <h2 className="text-2xl fredoka">1</h2> 
                </div> */}
                <div className="space-y-5">
                  <FaPuzzlePiece className="text-3xl md:text-6xl" />
                  <h3 className="font-bold fredoka md:text-xl">
                    Holistic Development
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
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-5">
                {/* <div>
                 <h2 className="text-2xl fredoka">1</h2> 
                </div> */}
                <div className="space-y-5">
                  <FaShieldAlt className="text-3xl md:text-6xl" />
                  <h3 className="font-bold fredoka md:text-xl">
                    Safe and Supportive Environment
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
