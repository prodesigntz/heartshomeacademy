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

export default function Page() {
  const [data, setData] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { didSucceed, items } = await fetchDocuments("Enrollments");
      //console.log("Items:...", items);

      if (didSucceed) {
        setData(items);
      } else {
        console.error("Failed to fetch Enrollments posts");
      }
    };

    fetchData();
  }, []);

  const handleDelete = async (progId) => {
    const { didSucceed } = await deleteDocument("Enrollments", progId);
    if (didSucceed) {
      setData((prevData) => prevData.filter((post) => post.id !== progId));
    } else {
      console.error("Failed to delete post");
    }
  };

  return (
    <main className="space-y-10">
      <section className="sektion md:grid-cols-2">
        <div></div>
        <div className="flex items-center justify-center md:justify-end">
          <Button
            asChild
            variant="hearts-primary"
            className="rounded-full bg-heartsprimary text-white"
          >
            <Link href="/cms/dashEnrollment/addEnrollment">
              Create Enrrollment
            </Link>
          </Button>
        </div>
      </section>
      <section>
        <Table className="">
          <TableCaption>List of All Enrollment </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Sno.</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Gender</TableHead>
              <TableHead>Birth Date</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {item.img && (
                    <Image
                      src={item.img}
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
                  <h3 className="text-base">{item.childFullName}</h3>
                </TableCell>
                <TableCell>
                  <h3>{item.gender}</h3>
                </TableCell>
                <TableCell>
                  <h3>{item.dob}</h3>
                </TableCell>
              
                <TableCell className="items-center space-x-1">
                  <Button
                    onClick={() =>
                      router.push(`/cms/dashEnrollment/${item.id}`)
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
                      href={`/dashEnrollment//${item.id}`}
                      target=""
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
