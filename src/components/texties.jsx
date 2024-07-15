import React from "react";

export const HeaderTitle = ({ first, last, subHeading, className, place }) => {
  return (
    <div className="flex flex-col">
      <h5 className={`text-sm pb-5 text-center  ${className} md:text-${place}`}>
        {subHeading}
      </h5>
      <h1
        className={`font-bold fredoka text-center md:text-start text-2xl  md:text-6xl pb-4`}
      >
        <span>{first}</span>
        &nbsp;
        <span className="text-irisonp">{last}</span>
      </h1>
    </div>
  );
};

export const Title = ({ first, last, subHeading, className, place }) => {
  return (
    <div className="flex flex-col">
      <h5
        className={`text-sm pb-5  text-center text-heartssecondary  ${className} md:text-${place}`}
      >
        {subHeading}
      </h5>
      <h1
        className={`font-bold fredoka text-center md:text-${place} text-2xl  md:text-4xl pb-4`}
      >
        <span>{first}</span>
        &nbsp;
        <span className="text-irisonp">{last}</span>
      </h1>
    </div>
  );
};

export const HomeParagraph = ({ content, place, className }) => {
  return (
    <>
      <p
        className={`pb-5 text-justify text-wrap text-lg antialiased md:text-${place} ${className}`}
      >
        {content}
      </p>
    </>
  );
};
