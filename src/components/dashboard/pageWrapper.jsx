import React from "react";

export default function PageWrapper({ children }) {
  return <div className="py-10 overflow-y-auto">{children}</div>;
}
