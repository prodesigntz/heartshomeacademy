import Link from "next/link";
import React from "react";
import { MobileNav } from "./mobilenav";
import { menuData } from "@/data/menuData";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="respons ">
      <div className="py-5">Top</div>
      <div className=" py-5 md:py-8 px-5 bg-slate-200 rounded-full">
        <div className="flex items-center justify-between">
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
          <div className="">
            <Button
              variant="hearts-primary"
              className="rounded-full bg-heartsprimary text-white"
            >
              Get Inquiry
            </Button>
          </div>
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
