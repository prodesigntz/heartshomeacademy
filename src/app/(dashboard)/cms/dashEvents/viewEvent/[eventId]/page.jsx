"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getSingleDocument, updateDocument } from "@/firebase/databaseOperations";
import Image from "next/image";
import SkeletonOne from "@/components/skeletonOne";

//import Attendee from "../attendee";
import { FaEye } from "react-icons/fa6";
import { FaEdit, FaTrash } from "react-icons/fa";
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
import { DialogPop } from "@/components/dialogPop";

export default function ViewEvent({ params }) {
  const { eventId } = useParams();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [eventData, setEventData] = useState({
    title: "",
    desc: "",
    obj: "",
    duration: "",
    eventDate: "",
    age: "",
    days: "",
    img: null,
    atendees: [],
  });

  const hudhuria = eventData.attendees;

  // Fetch existing event data if eventId is provided
  useEffect(() => {
    if (eventId) {
      const fetchEvent = async () => {
        setIsLoading(true);
        try {
          const { didSucceed, document } = await getSingleDocument(
            "Events",
            eventId
          );
          if (didSucceed) {
            setEventData({
              ...document,
            });

            //console.log("Attendees data here:...", document.attendees);
          } else {
            setError("Failed to fetch Event data.");
          }
        } catch (fetchError) {
          setError(`Error fetching Event data: ${fetchError.message}`);
        }

        // console.log("Wataaofika....", hudhuria);
        setIsLoading(false);
      };

      fetchEvent();
    }
  }, [eventId]);

  //Handle save and update the comment and staturs
  // const handleSaveChanges = async ({ comment, status }, inquiry) => {
  //   const updatedInquiry = { ...inquiry, comment, status };
  //   const { didSucceed } = await updateDocument(
  //     "Events",
  //     inquiry.id,
  //     updatedInquiry
  //   );

  //   if (didSucceed) {
  //     setData((prevData) =>
  //       prevData.map((item) => (item.id === inquiry.id ? updatedInquiry : item))
  //     );
  //   } else {
  //     console.error("Failed to update inquiry");
  //   }
  // };

  return (
    <main>
      <div className="bg-white shadow-lg rounded-lg p-8 w-full">
        <h1 className="text-2xl font-bold text-center text-slate-700 mb-6">
          Event Details
        </h1>
        {isLoading ? (
          <div className=" psektion respons">
            <SkeletonOne />
          </div>
        ) : (
          <section className="respons space-y-5">
            <div className="sektion md:grid-cols-3">
              {/* image here */}
              <div>
                {eventData.img && (
                  <div className="mt-2">
                    <Image
                      src={eventData.img}
                      alt="Current Featured Image"
                      width={280}
                      height={260}
                      style={{
                        maxWidth: "100%",
                        height: "160px",
                        objectFit: "cover",
                      }}
                      className="max-w-full max-h-50 rounded-md"
                    />
                  </div>
                )}
              </div>

              {/* Details Here */}
              <div className="col-span-2 space-y-3">
                <h2 className="text-xl text-slate-700 leading-tight">
                  {eventData.title}
                </h2>

                <div className="sektion md:grid-cols-4 md:content-center">
                  <div className="">
                    <label className="block text-slate-700 text-sm font-bold mb-2">
                      Duration
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                      {eventData.duration}
                    </p>
                  </div>
                  <div className="">
                    <label className="block text-slate-700 text-sm font-bold mb-2">
                      Event Date
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                      {eventData.eventDate}
                    </p>
                  </div>
                  <div className="">
                    <label className="block text-slate-700 text-sm font-bold mb-2">
                      Age
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                      {eventData.age}
                    </p>
                  </div>
                  <div className="">
                    <label className="block text-slate-700 text-sm font-bold mb-2">
                      Event Days
                    </label>
                    <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                      {eventData.days}
                    </p>
                  </div>
                </div>

                <div className="">
                  <label className="block text-slate-700 text-sm font-bold mb-2">
                    Objective
                  </label>
                  <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                    {eventData.obj}
                  </p>
                </div>
              </div>
            </div>

            {/* Content Here */}
            <div className="sektion space-y-3">
              <div className="">
                <label className="block text-slate-700 text-sm font-bold mb-2">
                  Content
                </label>
                <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                  {eventData.desc}
                </p>
              </div>
            </div>

            {/* Attendees List Here */}

            {/* <div className="mt-10">
              <Attendee attendee={eventData} />
            </div> */}

            <div className="mt-20 space-y-5">
              <section className="">
                <div className="flex items-center justify-center">
                  <Button
                  
                    variant="hearts-primary"
                    className="rounded-full bg-heartsprimary text-white"
                  >
                    List of Attendees
                  </Button>
                </div>
              </section>
              <section>
                <Table className="">
                  <TableCaption>List of Events </TableCaption>

                  <TableHeader>
                    <TableRow>
                      <TableHead>Sno.</TableHead>
                      <TableHead>Full Name</TableHead>
                      <TableHead>Phone</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>

                  <TableBody>
                    {hudhuria &&
                      hudhuria.map((item, index) => (
                        <TableRow key={index}>
                          <TableCell>{index + 1}</TableCell>
                          {/* <TableCell>
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
                        </TableCell> */}

                          <TableCell>
                            <h3 className="text-base">{item.name}</h3>
                          </TableCell>
                          <TableCell>
                            <h3 className="text-base">{item.phone}</h3>
                          </TableCell>

                          <TableCell>
                            <h3>{item.email}</h3>
                          </TableCell>
                          <TableCell className="items-center space-x-1">
                            <Button
                              onClick={() =>
                                router.push(`/cms/dashEvents/${item.id}`)
                              }
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

                            {/* <Button
                              asChild
                              className="bg-heartsprimary text-white hover:bg-heartsprimary"
                            >
                              <Link
                                href={`/cms/dashEvents/viewEvent/${item.id}`}
                                rel="noopener noreferrer"
                              >
                                <FaEye />
                              </Link>
                            </Button> */}

                            <DialogPop
                              btnTitle={<FaEye />}
                              title="Inquiry Details"
                              content={
                                <div className="space-y-4 p-5 bg-heartstertiary">
                                  <p>
                                    <strong>Name:</strong> {item.name}
                                  </p>
                                  <p>
                                    <strong>Phone:</strong> {item.phone}
                                  </p>
                                  <p>
                                    <strong>Email:</strong> {item.email}
                                  </p>
                                  <p>
                                    <strong>Message:</strong> {item.desc}
                                  </p>
                                  <p>
                                    <strong>Date:</strong>{" "}
                                    {new Date(item.createdAt).toLocaleString()}
                                  </p>
                                </div>
                              }
                              onSave={() => {}}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </section>
            </div>

            {error && (
              <p className="text-red-500 text-xs italic mb-4">{error}</p>
            )}
          </section>
        )}
      </div>
    </main>
  );
}
