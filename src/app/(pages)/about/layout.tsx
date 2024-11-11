"use client";
import Navbar from "@/components/navbar/Navbar";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { sleep } from "@/utils/sleep";

export default function GeneralLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
