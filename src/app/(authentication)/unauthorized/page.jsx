"use client";

import React from 'react';
import Link from 'next/link';

export default function UnauthorizedPage() {
  return (
    <main className="h-screen flex justify-center items-center text-white bg-[url('/images/heros/bghero.jpg')] bg-cover bg-center bg-slate-700 bg-blend-overlay bg-no-repeat">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md text-center">
        <h1 className="text-3xl font-bold text-red-600 mb-4">Access Denied</h1>
        <p className="text-slate-700 mb-6">
          You do not have permission to access this page. Please contact your administrator
          if you believe this is a mistake.
        </p>
        <div className="flex justify-center space-x-4">
          <Link
            href="/cms"
            className="bg-heartsprimary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-opacity-90 transition-all"
          >
            Return to Dashboard
          </Link>
          <Link
            href="/login"
            className="bg-slate-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-opacity-90 transition-all"
          >
            Login as Different User
          </Link>
        </div>
      </div>
    </main>
  );
}