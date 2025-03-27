"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { signInWithEmailAndPassword, getIdToken } from "firebase/auth";
import firebase from "@/firebase/firebaseInit";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { getSingleDocByFieldName } from "@/firebase/databaseOperations";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setAuthUser, setToken } = useAuthContext();
  const [loginAttempts, setLoginAttempts] = useState(0);
  const [lastAttemptTime, setLastAttemptTime] = useState(0);

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

    // Rate limiting check
    const now = Date.now();
    if (loginAttempts >= 5 && now - lastAttemptTime < 300000) { // 5 minutes cooldown
      setError("Too many login attempts. Please try again in a few minutes.");
      setIsLoading(false);
      return;
    }

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
        // Get the initial ID token
        const idToken = await getIdToken(authUserData);
        
        // Update context with user data and token
        setAuthUser({ ...userAuthData.document, id: authUserData.uid });
        setToken(idToken);
        
        // Redirect to dashboard
        router.push("/cms");
      } else {
        setError("User does not exist.");
      }
    } catch (error) {
      console.error("Sign-in error:", error.code, error.message);
      setLoginAttempts(prev => prev + 1);
      setLastAttemptTime(Date.now());
      
      const errorMessage = {
        "auth/user-not-found": "No account found with this email.",
        "auth/wrong-password": "Invalid password.",
        "auth/invalid-email": "Invalid email format.",
        "auth/too-many-requests": "Too many attempts. Please try again later.",
        "auth/network-request-failed": "Network error. Please check your connection."
      }[error.code] || "Failed to sign in. Please try again.";
      
      setError(errorMessage);
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
          {/* <p className="text-slate-700 text-sm space-x-2">
            <span>Dont have an account?</span>
            <Link
              href="/signup"
              className="font-bold text-blue-500 hover:text-blue-800"
            >
              Sign Up
            </Link>
          </p> */}
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
