"use client";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import React, {  } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Image from "next/image";
import { FaEye } from "react-icons/fa6";
import SkeletonOne from "@/components/skeletonOne";

export default function Attendee({attendee}) {
    console.log("attendee List:...", attendee);
    const hudhuria = attendee.attendees;

   if (!attendee) {
     return (
       <div className="psektion respons">
         <SkeletonOne />
       </div>
     );
   }
  return (
    <div>
      <section className="sektion md:grid-cols-2">
        <div></div>
        <div className="flex items-center justify-center md:justify-end">
          <Button
            asChild
            variant="hearts-primary"
            className="rounded-full bg-heartsprimary text-white"
          >
            <Link href="/cms/dashEvents/addevents">Create Attendee</Link>
          </Button>
        </div>
      </section>
      <section>
        <Table className="">
          <TableCaption>List of Events </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Sno.</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {hudhuria.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {item.img && (
                    <Image
                      src={item.img}
                      alt="blog"
                      width={80}
                      height={60}
                      style={{
                        maxWidth: "100%",
                        height: "60px",
                        objectFit: "cover",
                      }}
                      className="max-w-full max-h-50 rounded-md"
                    />
                  )}
                </TableCell>
                <TableCell>
                  <h3 className="text-base">{item.title}</h3>
                </TableCell>

                <TableCell>
                  <h3>{item.eventDate}</h3>
                </TableCell>
                <TableCell className="items-center space-x-1">
                  <Button
                    onClick={() => router.push(`/cms/dashEvents/${item.id}`)}
                    className="bg-heartsprimary text-white hover:bg-heartsprimary cursor-pointer"
                  >
                    <FaEdit />
                  </Button>
                  <Button
                    onClick={() => handleDelete(item.id)}
                    className="bg-heartsprimary text-white hover:bg-heartsprimary"
                  >
                    <FaTrash />
                  </Button>
                  <Button
                    asChild
                    className="bg-heartsprimary text-white hover:bg-heartsprimary"
                  >
                    <Link
                      href={`/cms/dashEvents/viewEvent/${item.id}`}
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                    </Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </div>
  );
}
