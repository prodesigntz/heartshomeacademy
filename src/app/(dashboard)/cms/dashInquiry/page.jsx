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
import { fetchDocuments, deleteDocument, updateDocument } from "@/firebase/databaseOperations";
import { DialogPop } from "@/components/dialogPop";

export default function Page() {
  const [data, setData] = useState([]);
    const [selectedInquiry, setSelectedInquiry] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      const { didSucceed, items } = await fetchDocuments("Inquiry");
      //console.log("Items:...", items)

      if (didSucceed) {
        setData(items);
        //console.log("Date Consoled:....", items.createdAt);
      } else {
        console.error("Failed to fetch Inquiry posts");
      }
    };

    fetchData();
  }, []);

  //handle deleting
  const handleDelete = async (progId) => {
    const { didSucceed } = await deleteDocument("Inquiry", progId);
    if (didSucceed) {
      setData((prevData) => prevData.filter((post) => post.id !== progId));
    } else {
      console.error("Failed to delete post");
    }
  };

  //Handle save and update the comment and staturs
    const handleSaveChanges = async ({ comment, status }, inquiry) => {
      const updatedInquiry = { ...inquiry, comment, status };
      const { didSucceed } = await updateDocument(
        "Inquiry",
        inquiry.id,
        updatedInquiry
      );
      if (didSucceed) {
        setData((prevData) =>
          prevData.map((item) =>
            item.id === inquiry.id ? updatedInquiry : item
          )
        );
      } else {
        console.error("Failed to update inquiry");
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
            <Link href="/cms/dashPrograms/addprogram">Create Inquiry</Link>
          </Button>
        </div>
      </section>
      <section>
        <Table className="">
          <TableCaption>List of Progams </TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Sno.</TableHead>
              <TableHead>Message</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Date</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {data.map((item, index) => (
              <TableRow key={item.id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  <h5>{item.desc}</h5>
                </TableCell>
                <TableCell>
                  <h3 className="text-base">{item.name}</h3>
                </TableCell>
                <TableCell>
                  <h3>{new Date(item.createdAt).toLocaleString()}</h3>
                </TableCell>
                <TableCell>
                  <h3>{item.email}</h3>
                </TableCell>
                <TableCell>
                  <h3>{item.status}</h3>
                </TableCell>
                <TableCell className="items-center space-x-1">
                  {/* <Button
                    onClick={() => router.push(`/cms/dashPrograms/${item.id}`)}
                    className="bg-heartsprimary text-white hover:bg-heartsprimary cursor-pointer"
                  >
                    <FaEdit />
                  </Button> */}
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
                      href={`/dashInquiry/${item.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaEye />
                    </Link>
                  </Button> */}
                  <DialogPop
                    btnTitle={<FaEye />}
                    title="Inquiry Details"
                    content={
                      <div className="space-y-4 p-5 bg-heartstertiary">
                        <p>
                          <strong>Name:</strong> {item.name}
                        </p>
                        <p>
                          <strong>Phone:</strong> {item.phone}
                        </p>
                        <p>
                          <strong>Email:</strong> {item.email}
                        </p>
                        <p>
                          <strong>Message:</strong> {item.desc}
                        </p>
                        <p>
                          <strong>Date:</strong>{" "}
                          {new Date(item.createdAt).toLocaleString()}
                        </p>
                      </div>
                    }
                    onSave={(data) => handleSaveChanges(data, item)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    </main>
  );
}
