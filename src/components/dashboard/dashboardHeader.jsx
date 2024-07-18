import React from "react";
import { AccountDash } from "./accountDash";

export default function DashboardHeader() {
  return (
    <div className="flex items-center justify-between p-5  rounded-md bg-heartstertiary sticky top-0 z-20 shadow-md">
      <div className="">Logo</div>
      <div className="hide md:block">Search</div>
      <div className="">
        <AccountDash />
      </div>
    </div>
  );
}
