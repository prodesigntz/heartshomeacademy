"use client";

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
import React, { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchDocuments, deleteDocument } from "@/firebase/databaseOperations";

export default function AllTeachers() {
    const [data, setData] = useState([]);
    const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { didSucceed, items } = await fetchDocuments("Users");
     //console.log("Items:...", items)

      if (didSucceed) {
        // Filter users to only include teachers
        const teachers = items.filter((user) => user.role === "teacher");
        setData(teachers);
        console.log("teachers:...", teachers.createAt)
      } else {
        console.error("Failed to fetch teachers");
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (postId) => {
    const { didSucceed } = await deleteDocument("Users", postId);
    if (didSucceed) {
      setData((prevData) => prevData.filter((post) => post.id !== postId));
    } else {
      console.error("Failed to delete Teacher");
    }
  };

  const formatDate = (timestamp) => {
    if (!timestamp) return "N/A"; // Handle undefined or null timestamp
    const date = new Date(timestamp.seconds * 1000); // Convert Firestore timestamp to JS Date
    return date.toLocaleString(); // Format the date
  };

  
  return (
    <main className="space-y-10">
      <section>
        <Table className="">
          <TableCaption>List of Teachers</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Sno.</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Full Name</TableHead>
              <TableHead>Username</TableHead>
              <TableHead>CreatedAt</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {item.profileImageUrl && (
                    <Image
                      src={item.profileImageUrl}
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
                </TableCell>
                <TableCell>
                  <h3 className="text-base space-x-2">
                    <span> {item.firstName}</span> <span> {item.lastName}</span>
                  </h3>
                </TableCell>
                <TableCell>
                  <h3>{item.username}</h3>
                </TableCell>
                <TableCell>
                  <h3>{formatDate(item.createdAt)}</h3>
                </TableCell>
                <TableCell className="items-center space-x-1">
                  <Button
                    onClick={() =>
                      router.push(`/cms/dashUsers/${item.id}`)
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
                      href={`/blog/${item.slug}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                    </Link>
                  </Button> */}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}