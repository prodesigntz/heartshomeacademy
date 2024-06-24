import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";

export const ActivitiesCards=({ src, title, desc })=> {
  return (
    <div className="shadow-md flex flex-col p-5 space-y-5 text-center">
      <div>
        <Image
          src={src}
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
      <div>
        <h3 className="font-semibold fredoka text-xl ">{title}</h3>
      </div>
      <div>
        <p className="">{desc}</p>
      </div>
    </div>
  );
}

export const FacilitiesCards=({ src, title, desc })=> {
  return (
    <div className="shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 hover:rounded-md duration-300 ">
      <div>
        <Image
          src={src}
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
      <div>
        <h3 className="font-semibold fredoka text-xl ">{title}</h3>
      </div>
      <div>
        <p className="">
        {desc}
        </p>
      </div>
    </div>
  );
}

export const TeamCards = ({ src, title, desc }) => {
  return (
    <div className="shadow-md flex flex-col p-5 space-y-5 text-center hover:text-white hover:bg-heartssecondary transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-10 hover:rounded-md duration-300 ">
      <div>
        <Image
          src={src}
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
      <div>
        <h3 className="font-semibold fredoka text-xl ">{title}</h3>
      </div>
      <div>
        <p className="">{desc}</p>
      </div>
    </div>
  );
};


export const BlogCards = ({ href,src,shortDesc, title }) => {
  return (
    <div className="rounded-3xl p-10 bg-white shadow-md">
      <div className="flex flex-col space-y-3">
        <Image
          src={src}
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
        <h2 className="font-semibold fredoka text-xl">{title}</h2>
        <p className="">{shortDesc}</p>
        <Button asChild className="rounded-full text-center text-lg p-6 bg-heartssecondary hover:border hover:border-heartsprimary hover:text-black">
          <Link href={href}> View More</Link>
        </Button>
      </div>
    </div>
  );
};