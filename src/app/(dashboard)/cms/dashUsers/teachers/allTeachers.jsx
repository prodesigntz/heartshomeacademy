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
import { IoDuplicate } from "react-icons/io5";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fetchDocuments, deleteDocument } from "@/firebase/databaseOperations";

export default function AllTeachers() {
    const [data, setData] = useState([]);
    const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { didSucceed, items } = await fetchDocuments("Blogpost");
      //console.log("Items:...", items)

      if (didSucceed) {
        setData(items);
      } else {
        console.error("Failed to fetch blog posts");
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (postId) => {
    const { didSucceed } = await deleteDocument("Blogpost", postId);
    if (didSucceed) {
      setData((prevData) => prevData.filter((post) => post.id !== postId));
    } else {
      console.error("Failed to delete post");
    }
  };

  

  
  return (
    <main className="space-y-10">
    
      <section>
        <Table className="">
          <TableCaption>List of Blog Posts</TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Sno.</TableHead>
              <TableHead>Image</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Author</TableHead>
              <TableHead>Category</TableHead>
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
                  <h3 className="text-base">{item.title}</h3>
                </TableCell>
                <TableCell>
                  <h3>{item.author}</h3>
                </TableCell>
                <TableCell>
                  <h3>{item.category}</h3>
                </TableCell>
                <TableCell className="items-center space-x-1">
                  <Button
                    onClick={() => router.push(`/cms/dashBlog/${item.id}`)}
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
                  <Button
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
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
