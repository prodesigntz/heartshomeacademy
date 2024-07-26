"use client"

import React, { useEffect } from "react";

import NavBar from "@/components/navbar";
import { Footer } from "@/components/footer";
import AOS from "aos";
import "aos/dist/aos.css";
import TawtoMessenger from "@/components/tawtoMessenger";
import Landing from "./(pages)/landing/page";

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
      <Landing/>
      <TawtoMessenger/>
      <Footer />
    </main>
  );
}
