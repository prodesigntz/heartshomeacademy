"use client"

import React, { useEffect } from "react";
import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/navigation";

export default function Dashboard() {
   const { authUser } = useAppContext();
   const router = useRouter();
   //console.log("User Data: ", authUser);

   useEffect(() => {
     if (!authUser) {
       router.push("/signup");
     }
   }, [authUser, router]);

   if (!authUser) {
     return <p>Loading...</p>;
   }

  return (
    <div className="p-8">
      <h1 className="text-2xl mb-4">Welcome, {authUser.firstName}!</h1>
      <h3 className="text-lg mb-6">Here are your details:</h3>
      <ol className="space-y-4">
        <li className="flex space-x-2">
          <span className="font-bold">Username:</span>
          <span>{authUser.username}</span>
        </li>
        <li className="flex space-x-2">
          <span className="font-bold">Email:</span>
          <span>{authUser.email}</span>
        </li>
        <li className="flex space-x-2">
          <span className="font-bold">First Name:</span>{" "}
          <span>{authUser.firstName}</span>
        </li>
        <li className="flex space-x-2">
          <span className="font-bold">Last Name:</span>
          <span>{authUser.lastName}</span>
        </li>
        <li className="flex space-x-2">
          <span className="font-bold">Role:</span> <span>{authUser.role}</span>
        </li>
        {/* <li className="flex space-x-2">
          <span className="font-bold">Created at:</span>
          <span>
            {new Date(authUser.createdAt.seconds * 1000).toLocaleString()}
          </span>
        </li> */}
        <li className="flex space-x-2">
          <span className="font-bold">Unique ID:</span>
          <span>{authUser.id}</span>
        </li>
      </ol>
    </div>
  );
}

