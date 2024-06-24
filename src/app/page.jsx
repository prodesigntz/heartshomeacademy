"use client"

import React, { useEffect } from "react";

import NavBar from "@/components/navbar";
import Landing from "./(pages)/home/page";
import { Footer } from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

// export const metadata = {
//   title: "Hearts Home Academy",
//   description: "Building Blocks for Dreams",
// };

export default function Home() {
 
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 900, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once - while scrolling down
    });
  }, []);

  return (
    <main className="">
      <NavBar />
      <Landing />
      <Footer />
    </main>
  );
}
