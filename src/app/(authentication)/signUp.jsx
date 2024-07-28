"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import firebase from "@/firebase/firebaseInit";
import { useAppContext } from "@/context/AppContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createDocument } from "@/firebase/databaseOperations";
//import { createDocument } from "@/utils/databaseOperations"; // Adjust the import path as needed

export default function SignupPage() {
  const [error, setError] = useState(null);
  const { setAuthUser } = useAppContext();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    role: "", // Add role selection here
    userID:"",
  });

  const [isLoading, setIsLoading] = useState(false);

  // navigation
  const router = useRouter();

  // handling data change on typing
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // handle signup login
  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Create user with email and password
      const { email, password } = formData;
      const authUserCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );

      const authUser = authUserCredential.user;

      // Create user document in Firestore
      const userData = {
        username: formData.username,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: authUser.email,
        role: formData.role,
        createdAt: new Date(),
        userID: authUser.uid,
        // Add other fields as needed
      };
      const { didSucceed, docId } = await createDocument(userData, "Users");

      if (didSucceed) {
        // Set auth user in context
        setAuthUser({ ...userData, id: docId });

        // Redirect to CMS or dashboard page
        router.push("/cms"); // Replace with your CMS route
      } else {
        console.error("Failed to create user document in Firestore.");
        // Handle error or display message to user
        setError("Failed to create user document in Firestore.");
        router.push("/signup");
      }
    } catch (error) {
      console.error("Signup error:", error.message);
      // Handle signup error or display message to user
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-center text-slate-700 mb-6">
          Sign Up
        </h1>
        <form onSubmit={handleSignup}>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="firstName"
            >
              First Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="firstName"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="lastName"
            >
              Last Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="lastName"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              name="username"
              value={formData.username}
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
              type="email"
              placeholder="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="role"
            >
              Role
            </label>
            <select
              id="role"
              name="role"
              value={formData.role}
              onChange={handleChange}
              required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              <option value="" disabled>
                Select your role
              </option>
              <option value="staff">Staff</option>
              <option value="teacher">Teacher</option>
              <option value="student">Student</option>
              <option value="parent">Parent</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="********"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

          <div className="flex items-center justify-between mb-4">
            <button
              className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Signing Up..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <p className="text-slate-700 text-sm">
            Already have an account?{" "}
            <Link
              className="font-bold text-blue-500 hover:text-blue-800"
              href="/login"
            >
              Log In
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
