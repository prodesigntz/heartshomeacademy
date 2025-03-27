"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  getSingleDocByFieldNameOrg,
  updateDocumentArray,
} from "@/firebase/databaseOperations";
import SkeletonOne from "@/components/skeletonOne";
import { isEventPast } from "@/lib/utils";

export default function Page({ params }) {
  const { slug } = useParams();
  const [event, setEvent] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  useEffect(() => {
    const fetchEventData = async () => {
      if (!slug) {
        console.error("No slug provided");
        return;
      }

      try {
        const { didSucceed, document } = await getSingleDocByFieldNameOrg(
          "Events",
          "slug",
          slug
        );

        if (didSucceed) {
          setEvent(document);
        } else {
          console.error("Failed to fetch Events post");
        }
      } catch (error) {
        console.error("Error fetching events post:", error);
      }
    };

    fetchEventData();
  }, [slug]);

  if (!event) {
    return (
      <div className="psektion respons">
        <SkeletonOne />
      </div>
    );
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const newAttendee = {
      ...formData,
      createdAt: new Date().toISOString(),
    };

    try {
      const response = await updateDocumentArray(
        "Events",
        event.id,
        "attendees",
        newAttendee
      );
      if (response.didSucceed) {
        console.log("Attendee added successfully.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          desc: "",
        });
        alert("Submitted successfully!");
      } else {
        console.error("Error adding attendee: ", response.message);
        setError("Failed to submit Attendee. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  const isPastEvent = isEventPast(event.eventDate);

  return (
    <main className="psektion respons space-y-10">
      {/* image */}
      <div className="md:-mt-32 bg-white rounded-md">
        <Image
          src={event.img}
          alt={event.title}
          width={2000}
          height={340}
          className="h-96 object-cover rounded-md border border-heartssecondary"
          priority
        />
      </div>

      {/* title */}
      <div className="font-bold md:text-6xl">{event.title}</div>

      <div className="sektion md:grid-cols-3">
        <div className="col-span-2 space-y-10">
          <div className="sektion md:grid-cols-4 md:content-center">
            <div className="">
              <label className="block text-slate-700 text-sm font-bold mb-2">
                Duration
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                {event.duration}
              </p>
            </div>
            <div className="">
              <label className="block text-slate-700 text-sm font-bold mb-2">
                Event Date
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                {event.eventDate}
              </p>
            </div>
            <div className="">
              <label className="block text-slate-700 text-sm font-bold mb-2">
                Age
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                {event.age}
              </p>
            </div>
            <div className="">
              <label className="block text-slate-700 text-sm font-bold mb-2">
                Event Days
              </label>
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
                {event.days}
              </p>
            </div>
          </div>

          <div className="">
            <label className="block text-slate-700 text-sm font-bold mb-2">
              Objectives
            </label>
            <p className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight">
              {event.obj}
            </p>
          </div>

          <div className="">
            <p className="">{event.desc}</p>
          </div>
        </div>

        <div>
          {isPastEvent ? (
            <div className="bg-slate-300 rounded-lg p-5 max-h-sm">
              <p className="text-center text-slate-700 font-semibold">This event has already taken place.</p>
            </div>
          ) : (
            <div className="bg-slate-300 rounded-lg p-5 max-h-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    className="block text-slate-700 text-sm font-bold mb-2"
                    htmlFor="phone"
                  >
                    Phone Number
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone"
                    type="text"
                    placeholder="Enter Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4"></div>
                <div className="mb-4">
                  <label
                    className="block text-slate-700 text-sm font-bold mb-2"
                    htmlFor="name"
                  >
                    Full name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="title"
                    type="text"
                    placeholder="Enter Fullname "
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-slate-700 text-sm font-bold mb-2"
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email"
                    type="text"
                    placeholder="Enter Email "
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    className="block text-slate-700 text-sm font-bold mb-2"
                    htmlFor="desc"
                  >
                    Content
                  </label>
                  <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="desc"
                    placeholder="Enter Content Here"
                    name="desc"
                    value={formData.desc}
                    onChange={handleChange}
                    required
                  />
                </div>
                {error && (
                  <p className="text-red-500 text-xs italic mb-4">{error}</p>
                )}
                <div className="flex items-center justify-between mb-4">
                  <button
                    className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                    disabled={isLoading}
                  >
                    {isLoading ? "Sending..." : "Send"}
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
