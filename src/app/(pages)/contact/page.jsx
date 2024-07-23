"use client";

import React, { useState } from "react";
import { HomeParagraph, Title } from "@/components/texties";
import { FaEnvelope, FaMap, FaPhoneFlip } from "react-icons/fa6";
import { createDocument } from "@/firebase/databaseOperations";

export default function Contact() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    desc: "",
  });

  //instant typing
    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

  //handling submitting
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Update date before sending
    const updatedFormData = {
      ...formData,
      createdAt: new Date().toISOString(),
    };


    try {
      const response = await createDocument(updatedFormData, "Inquiry");
      if (response.didSucceed) {
        console.log("Document written with ID: ", response.docId);
        // Clear form fields
        setFormData({ 
          name: "",
          email: "",
          phone: "",
          desc: "",
        });
        alert("Inquiry submitted successfully!");
      } else {
        console.error("Error adding document: ", response.message);
        setError("Failed to submit inquiry. Please try again.");
      }
    } catch (error) {
      console.error("Unexpected error:", error);
      setError("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <main className="">
      <section className="psektion respons sektion md:grid-cols-3 ">
        <div className="col-span-2 ">
          <Title place="start" first="Let's Get in Touch" />
          <HomeParagraph
            place="start"
            content=" 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis saepe incidunt perspiciatis minima nam molestiae, ex sapiente nostrum a repellat alias dolores qui facere, rerum sequi impedit optio, minus aut. "
          />
          <div className="sektion ">
            <div className="flex items-center space-x-2">
              <FaEnvelope className="text-2xl md:text-3xl" />
              <div className="grid">
                <h2> Email</h2>
                <p>info@heartshomeacademy.sc.tz</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaPhoneFlip className="text-2xl  md:text-3xl" />
              <div className="grid">
                <h2> Call</h2>
                <p>+255 755 902 861</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <FaMap className="text-2xl md:text-3xl" />
              <div className="grid">
                <h2>Location</h2>
                <p>Sakina, Arusha</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-300 rounded-lg p-5">
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
      </section>

      {/* map section */}
      <section className="">map section</section>
    </main>
  );
}
