import Link from "next/link";
import React from "react";
import { MobileNav } from "./mobilenav";
import { menuData } from "@/data/menuData";
import { Button } from "./ui/button";

export default function NavBar() {
  return (
    <nav className="bg-slate-200 shadow-md">
      <div className="py-2 bg-heartsprimary ">
        <div className="respons">Top</div>
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
