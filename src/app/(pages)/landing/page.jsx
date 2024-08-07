"use client";

import React from "react";
import Accomplishment from "@/components/content/accomplishment";
import Activities from "@/components/content/activities";
import BlogSection from "@/components/content/blogsection";
import Facilities from "@/components/content/facilities";
// import Gallery from "@/components/content/gallery";
import Hero from "@/components/content/hero";
import Intro from "@/components/content/intro";
import Programs from "@/components/content/programs";
import Events from "@/components/content/events";


 const Landing = () => {
  return (
    <main>
      <Hero/>
      <Intro/>
      <Programs/>
      <Activities/>
      <Accomplishment/>
      <Facilities/>    
      <Events/>
      {/* <Gallery/> */}
      {/* <Testimonial/> */}
      <BlogSection/>
      {/* <Subscription/> */}
    </main>
    );
} 

export default Landing;
