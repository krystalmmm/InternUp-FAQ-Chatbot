"use client";

import React from "react";
import dynamic from "next/dynamic";

// Dynamically import Chatbot
const Chatbot = dynamic(() => import("@/components/Chatbox"), { ssr: false });

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Chatbot />
    </>
  );
}
