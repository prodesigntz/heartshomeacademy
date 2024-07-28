"use client"

import React, { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import firebase from "@/firebase/firebaseInit"; // Adjust the path if necessary
import { useRouter } from "next/navigation";
import { Link2 } from "lucide-react";
import Link from "next/link";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const router = useRouter();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(firebase.auth, email);
      setMessage("Password reset email sent. Check your inbox.");
      setError(null);
    } catch (error) {
      console.error("Forgot password error:", error.message);
      setError("Failed to send password reset email. Please try again.");
      setMessage(null);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="uppercase fredoka text-2xl font-bold text-center text-slate-700 mb-6">
          Forgot Password
        </h1>
        <form className="space-y-4" onSubmit={handleResetPassword}>
          <div className="">
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
              placeholder="Enter your email"
              value={email}
              onChange={handleChange}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          {message && (
            <p className="text-green-500 text-xs italic mb-4">{message}</p>
          )}
          <div className="flex items-center justify-between">
            <button
              className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Reset Password
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="text-slate-700 text-sm">
            Already have an account?{" "}
            <Link
              href="/sigin"
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              Sign In
            </Link>
          </p>
        
        </div>
      </div>
    </main>
  );
}
