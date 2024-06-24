import Accomplishment from "@/components/content/accomplishment";
import Activities from "@/components/content/activities";
import BlogSection from "@/components/content/blogsection";
import Facilities from "@/components/content/facilities";
import Gallery from "@/components/content/gallery";
import Hero from "@/components/content/hero";
import Intro from "@/components/content/intro";
import Programs from "@/components/content/programs";
import Subscription from "@/components/content/subscription";
//import Testimonial from "@/components/content/testimonial";
import React from "react";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Intro/>
      <Programs/>
      <Activities/>
      <Accomplishment/>
      <Facilities/>    
      <Gallery/>
      {/* <Testimonial/> */}
      <BlogSection/>
      {/* <Subscription/> */}
    </main>
    );
}
