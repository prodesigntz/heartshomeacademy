"use client";

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import firebase from "@/firebase/firebaseInit";
import { useAppContext } from "@/context/AppContext";
import { createDocument } from "@/firebase/databaseOperations";
import { imageUploadToFirebase } from "@/firebase/fileOperations"; // Import the image upload function
import Image from "next/image";

export default function AddUser() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    username: "",
    role: "",
    profileImage: null,
  });
  const [profileImagePreview, setProfileImagePreview] = useState(null); // State for image preview
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { setAuthUser } = useAppContext();
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "profileImage") {
      const file = files[0];
      setFormData({ ...formData, profileImage: file });

      // Generate a preview of the image
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const {
      email,
      password,
      username,
      firstName,
      lastName,
      role,
      profileImage,
    } = formData;

    if (
      !firstName ||
      !lastName ||
      !username ||
      !email ||
      !password ||
      !role ||
      !profileImage
    ) {
      setError("Please fill out all fields and upload a profile image.");
      setIsLoading(false);
      return;
    }

    try {
      const authUserCredential = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password
      );
      const authUser = authUserCredential.user;

      // Upload profile image to Firebase Storage
      const profileImageUrl = await imageUploadToFirebase(
        profileImage,
        "profileImages"
      );

      const userData = {
        username,
        firstName,
        lastName,
        email: authUser.email,
        role,
        createdAt: new Date(),
        userID: authUser.uid,
        profileImageUrl, // Add profileImageUrl to user data
      };

      const { didSucceed, docId } = await createDocument(userData, "Users");

      if (didSucceed) {
        setAuthUser({ ...userData, id: docId });
        router.push("/cms/dashUsers");
      } else {
        setError("Failed to create user document in Firestore.");
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 w-full">
      <h1 className="text-2xl font-bold text-center text-slate-700 mb-6">
        Add User
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
            <option value="admin">Admin</option>
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
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-slate-700 text-sm font-bold mb-2"
            htmlFor="profileImage"
          >
            Profile Image
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-slate-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="profileImage"
            type="file"
            name="profileImage"
            accept="image/*"
            onChange={handleChange}
            required
          />
          {profileImagePreview && (
            <Image
              src={profileImagePreview}
              alt="Profile Preview"
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
        </div>
        {error && <p className="text-red-500 text-xs italic mb-4">{error}</p>}

        <div className="flex items-center justify-between mb-4">
          <button
            className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            disabled={isLoading}
          >
            {isLoading ? "Adding User..." : "Add User"}
          </button>
        </div>
      </form>
    </div>
  );
}
