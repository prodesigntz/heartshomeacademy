// src/hoc/withAuth.js
"use client"

import { useAppContext } from "@/context/AppContext";
import { useRouter } from "next/router";
import { useEffect } from "react";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { authUser } = useAppContext();
    const router = useRouter();

    useEffect(() => {
      if (!authUser) {
        router.push("/signup"); // Redirect to signup page if not authenticated
      }
    }, [authUser, router]);

    if (authUser) {
      return <WrappedComponent {...props} />;
    }

    return null;
  };
};

export default withAuth;
