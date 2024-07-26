import React from 'react'
import { HomeParagraph, Title } from '../texties'
import { Button } from '../ui/button'
import Image from 'next/image';
import Link from 'next/link';

export default function Intro() {
  return (
    <section className="psektion bg-gradient-to-t from-[#ffefe2] to-white">
      <div className="respons sektion md:grid-cols-5">
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
            content="At Hearts Home Academy, we create a safe and nurturing environment where children thrive through engaging and holistic education. We emphasize creativity, curiosity, and comprehensive development, laying a strong foundation for lifelong learning and success."
          />
          <div className=" flex items-center space-x-5">
            <Button
              asChild
              className="rounded-full text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black"
            >
              <Link href="/about">Read More</Link>
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
    </section>
  );
}
