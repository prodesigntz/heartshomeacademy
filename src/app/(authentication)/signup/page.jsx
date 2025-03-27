"use client";

import Link from "next/link";
import React, { useState } from "react";
import { createUserWithEmailAndPassword, getIdToken } from "firebase/auth";
import firebase from "@/firebase/firebaseInit";
import { useRouter } from "next/navigation";
import { useAuthContext } from "@/context/AuthContext";
import { createDocument } from "@/firebase/databaseOperations";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { setAuthUser, setToken } = useAuthContext();

  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangePassword = (e) => setPassword(e.target.value);
  const handleChangeConfirmPassword = (e) => setConfirmPassword(e.target.value);
  const handleChangeUsername = (e) => setUsername(e.target.value);

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
      return "Password must be at least 8 characters long";
    }
    if (!hasUpperCase || !hasLowerCase) {
      return "Password must contain both uppercase and lowercase letters";
    }
    if (!hasNumbers) {
      return "Password must contain at least one number";
    }
    if (!hasSpecialChar) {
      return "Password must contain at least one special character";
    }
    return null;
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    // Validate password
    const passwordError = validatePassword(password);
    if (passwordError) {
      setError(passwordError);
      setIsLoading(false);
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      setIsLoading(false);
      return;
    }

    try {
      // Create user with email and password
      const authUserCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      const authUserData = authUserCredential.user;

      // Create user document in Firestore
      const userData = {
        email: email,
        username: username,
        role: "user",
        createdAt: new Date().toISOString(),
      };

      const { didSucceed } = await createDocument(
        userData,
        "Users",
        authUserData.uid
      );

      if (didSucceed) {
        // Get the initial ID token
        const idToken = await getIdToken(authUserData);
        
        // Update context with user data and token
        setAuthUser({ ...userData, id: authUserData.uid });
        setToken(idToken);
        
        // Redirect to dashboard
        router.push("/cms");
      } else {
        throw new Error("Failed to create user document");
      }
    } catch (error) {
      console.error("Sign-up error:", error.code, error.message);
      
      const errorMessage = {
        "auth/email-already-in-use": "An account with this email already exists.",
        "auth/invalid-email": "Invalid email format.",
        "auth/operation-not-allowed": "Email/password accounts are not enabled. Please contact support.",
        "auth/weak-password": "Password is too weak."
      }[error.code] || "Failed to create account. Please try again.";
      
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="uppercase fredoka text-2xl font-bold text-center text-slate-700 mb-6">
          Sign Up
        </h1>
        <form className="space-y-4" onSubmit={handleSignUp}>
          <div>
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
              value={username}
              onChange={handleChangeUsername}
              required
            />
          </div>
          <div>
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
          <div>
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
          <div>
            <label
              className="block text-slate-700 text-sm font-bold mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="confirmPassword"
              type="password"
              placeholder="********"
              value={confirmPassword}
              onChange={handleChangeConfirmPassword}
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
              {isLoading ? "Creating Account..." : "Sign Up"}
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          <p className="text-slate-700 text-sm space-x-2">
            <span>Already have an account?</span>
            <Link
              href="/login"
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