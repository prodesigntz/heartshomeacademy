"use client";

import React, { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  getSingleDocument,
  updateDocument,
} from "@/firebase/databaseOperations";
import { imageUploadToFirebase } from "@/firebase/fileOperations"; // Import the image upload function
import Image from "next/image";

export default function SingleUser() {
  const { id } = useParams();
  const [profileImagePreview, setProfileImagePreview] = useState(null); // State for image preview
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    role: "",
    profileImage: null,
  });

  // fetches data by userID
  useEffect(() => {
    const fetchUserData = async () => {
      const { didSucceed, document } = await getSingleDocument("Users", id);
      if (didSucceed) {
        setFormData({
          ...document,
          profileImage: null, // Reset profileImage to null as we will upload a new one if changed
        });
        setProfileImagePreview(document.profileImageUrl);
      } else {
        setError("Failed to fetch user data.");
      }
    };

    fetchUserData();
  }, [id]);

  //Handle any changes that will be done on the form
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

  // Hnadle updates of the changes made
  const handleUpdate = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const { username, firstName, lastName, role, profileImage } = formData;

    if (!firstName || !lastName || !username || !role) {
      setError("Please fill out all fields and upload a profile image.");
      setIsLoading(false);
      return;
    }

    try {
      let profileImageUrl = formData.profileImageUrl;

      // Upload profile image to Firebase Storage if a new one is selected
      if (profileImage) {
        profileImageUrl = await imageUploadToFirebase(
          profileImage,
          "profileImages"
        );
      }

      const updatedData = {
        username,
        firstName,
        lastName,
        role,
        profileImageUrl,
      };

      const { didSucceed } = await updateDocument("Users", id, updatedData);

      if (didSucceed) {
        router.push("/cms/dashUsers");
      } else {
        setError("Failed to update user data in Firestore.");
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
        Edit User
      </h1>
      <form onSubmit={handleUpdate}>
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
        <div className="mb-4">
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
            {isLoading ? "Updating User..." : "Update User"}
          </button>
        </div>
      </form>
    </div>
  );
}
