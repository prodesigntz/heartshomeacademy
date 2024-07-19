"use client";

import Link from "next/link";
import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import firebase from "@/firebase/firebaseInit"; // Adjust the path if necessary
import { useRouter } from "next/navigation";
import { useAppContext } from "@/context/AppContext";
import { getSingleDocByFieldName } from "@/firebase/databaseOperations";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setAuthUser } = useAppContext();

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const authUserCredential = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      const authUserData = authUserCredential.user;

      // Fetch user data from Firestore using getSingleDocument
      const userAuthData = await getSingleDocByFieldName(
        "Users",
        authUserData.uid
      );

      if (userAuthData.didSucceed) {
        // Update context with user data
        setAuthUser({ ...userAuthData.document, id: authUserData.uid });
        router.push("/cms"); // Replace with your dashboard route
      } else {
        setError("User does not exist.");
      }
    } catch (error) {
      console.error("Sign-in error:", error.message);
      setError(
        "Failed to sign in. Please check your credentials and try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="uppercase fredoka text-2xl font-bold text-center text-slate-700 mb-6">
          Login
        </h1>
        <form className="space-y-4" onSubmit={handleSignIn}>
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
              placeholder="Email"
              value={email}
              onChange={handleChangeEmail}
              required
            />
          </div>
          <div className="">
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
              value={password}
              onChange={handleChangePassword}
              required
            />
          </div>
          {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}
          <div className="flex items-center justify-between">
            <button
              className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              disabled={isLoading}
            >
              {isLoading ? "Signing In..." : "Sign In"}
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="text-slate-700 text-sm space-x-2">
            <span>
            Don't have an account?</span>
            <Link
              href="/signup"
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              Sign Up
            </Link>
          </p>
          <p className="text-slate-700 text-sm mt-2 space-x-2">
            <span>Forgot your password?</span>
            
            <Link
              href="/forgotPassword"
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              Reset it here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
