import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <main className="h-screen flex justify-center items-center text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-sm">
        <h1 className="uppercase fredoka text-2xl font-bold text-center text-slate-700 mb-6">
          Page Not Found
        </h1>
        <p className="text-slate-900">
          The page you are looing for is not found, please correct the path or
          spelling
        </p>
        <div className="flex items-center justify-center mt-10 ">
          <Button
            asChild
            className="bg-heartsprimary hover:bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            <Link href="/">Go Home</Link>
          </Button>
        </div>
      </div>
    </main>
  );
}
