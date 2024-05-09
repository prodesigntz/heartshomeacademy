import { footerData } from "@/data/footerData";
import Link from "next/link";
import React from "react";
//import { Input } from "@/components/ui/input";
import { FaEnvelope } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";
import { Button } from "./ui/button";
import Socialmedias from "./socialmedias";

export const Footer = () => {
  return (
    <section className="psektion bg-heartsprimary">
      <div className="respons sektion md:grid-cols-6">
        <div className="text-slate-200 col-span-2 space-y-2 ">
          Logo
          <h5 className="font-bold">HEARTS HOME ACADEMY</h5>
          <h5 className="text-sm ">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum,
            doloremque veniam.
          </h5>
          <h5 className="pt-2 ">
            {new Date().getFullYear()} © Copyright Hearts Home Academy.
          </h5>
        </div>
        <div className="text-slate-200">
          <h5 className="font-bold text-xl pb-3">{footerData[0].title}</h5>
          {footerData[0].links.map((comp, i) => (
            <ul key={i} className="space-y-2">
              <Link href={comp.link}>{comp.name}</Link>
            </ul>
          ))}
        </div>

        <div className="text-slate-200">
          <h5 className="font-bold text-xl pb-3">{footerData[1].title}</h5>
          {footerData[1].links.map((imp, i) => (
            <ul key={i} className="space-y-2">
              <Link href={imp.link}>{imp.name}</Link>
            </ul>
          ))}
        </div>
        <div className="text-slate-200 space-y-3 col-span-2">
          <h5 className="font-bold text-xl ">Get in Touch</h5>
          <h4>Subscribe our Newsletter</h4>
          <div className="flex items-center justify-between space-x-2">
            {/* <Input
              type="email"
              placeholder="Email"
              className="w-full max-w-sm"
            /> */}
            <Button type="submit" className="bg-heartshomeacademy flex items-center">
              {/* <FaEnvelope /> */}
               Subscribe
            </Button>
          </div>
           <Socialmedias/>         
        </div>
      </div>
    </section>
  );
};