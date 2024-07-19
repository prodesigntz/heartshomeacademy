import Link from "next/link";
import React from "react";
import { MobileNav } from "./mobilenav";
import { menuData } from "@/data/menuData";
import { Button } from "./ui/button";
import Socialmedias from "./socialmedias";
import { FaPhoneAlt } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="py-2 bg-heartsprimary text-white">
        <div className="hidden md:flex md:items-center md:justify-between respons">
          <div className="text-sm">info@heartshomeacademy.sc.tz</div>
          <div className="text-sm"> 
            <Link href="/" className="flex items-center space-x-2 font-semibold"> 
                <FaPhoneAlt className="text-xl" /> <p>+255 755 902 861</p>    
           
            </Link>
          </div>
          <div className="text-sm"> <Socialmedias/></div>
        </div>
      </div>
      <div className=" py-5 md:py-8 px-5 ">
        <div className="respons flex items-center justify-between">
          {/* logo  */}
          <div className="font-bold"> HEARTS HOME ACADEMY</div>
          {/* webHeader  */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-3">
              {menuData.map((menus, i) => (
                <Link
                  key={i}
                  href={menus.link}
                  className="font-medium hover:bg-irisonp/5 "
                >
                  <li className="p-2"> {menus.name}</li>
                </Link>
              ))}
            </ul>
          </div>

          {/* button */}
          <div className="hidden md:block">
            <Button
              asChild
              variant="hearts-primary"
              className="rounded-full bg-heartsprimary text-white"
            >
              <Link href="/enroll">Enroll Now</Link>
             
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
