"use client";

import React, { useState, useEffect } from "react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { menuDashItem } from "@/data/menuDash";
import { useAppContext } from "@/context/AppContext";
import { menuStudentDashItem } from "@/data/menuStudentDash";
import { menuParentDashItem } from "@/data/menuParentDash";
import { menuStaffDashItem } from "@/data/menuStaffDash";
import { useRouter } from "next/navigation";

export default function SideBar() {
  const [openSections, setOpenSections] = useState({});
  const [filteredMenu, setFilteredMenu] = useState([]);
  const { authUser } = useAppContext();
  const router = useRouter();

  //filter access
  useEffect(() => {
    if (!authUser) {
      router.push("/login");
    } else {
      const role = authUser.role;
      switch (role) {
        case "teacher":
          setFilteredMenu(menuDashItem);
          break;
        case "parent":
          setFilteredMenu(menuParentDashItem);
          break;
        case "student":
          setFilteredMenu(menuStudentDashItem);
          break;
        case "staff":
          setFilteredMenu(menuStaffDashItem);
          break;
        default:
          router.push("/login");
          break;
      }
    }
  }, [authUser, router]);
  

  const toggleSection = (index) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <div className="space-y-5">
      {filteredMenu.map((dashitem, index) => (
        <div key={index}>
          <Command>
            <CommandList>
              <CommandGroup>
                <div
                  className="flex justify-between items-center cursor-pointer px-3 py-1"
                  onClick={() => toggleSection(index)}
                >
                  <span className="text-lg fredoka font-semibold text-gray-700">
                    {dashitem.name}
                  </span>
                  {openSections[index] ? <ChevronUp /> : <ChevronDown />}
                </div>
                {openSections[index] && (
                  <div className="ml-4 space-y-2">
                    {dashitem.subMenu.map((dashsub, idash) => (
                      <Link href={dashsub.path} key={idash} passHref>
                        <div className="cursor-pointer text-gray-700 hover:text-gray-900 hover:bg-slate-300 py-2 px-2">
                          {dashsub.name}
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </CommandGroup>
              <CommandSeparator />
            </CommandList>
          </Command>
        </div>
      ))}
    </div>
  );
}
