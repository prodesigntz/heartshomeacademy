import { HomeParagraph, Title } from "@/components/texties";
import React from "react";
import { FaPhone } from "react-icons/fa";
import { FaEnvelope, FaMap, FaPhoneFlip } from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="">
      <section className="psektion respons sektion md:grid-cols-3 bg-slate-200">
        <div className="col-span-2 ">
          <Title place="start" first="Let's Get in Touch" />
          <HomeParagraph
            place="start"
            content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe incidunt perspiciatis minima nam molestiae, ex sapiente nostrum a repellat alias dolores qui facere, rerum sequi impedit optio, minus aut. "
          />
          <div className="sektion md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-2xl md:text-3xl" />
              <div className="grid">
                <h2> Email</h2>
                <p>info@heartshomeacademy.sc.tz</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneFlip className="text-2xl  md:text-3xl" />
              <div className="grid">
                <h2> Call</h2>
                <p>+255 755 902 861</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaMap className="text-2xl md:text-3xl" />
              <div className="grid">
                <h2>Location</h2>
                <p>Sakina, Arusha</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-300"></div>
      </section>

      {/* map section */}
      <section className="">map section</section>
    </main>
  );
}
