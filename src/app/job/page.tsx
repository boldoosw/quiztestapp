"use client";
import JobCards from "@/components/Cards/JobCards";
import { useSession } from "next-auth/react";
import React from "react";

function JobPage() {
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }
  return (
    <div className="flex flex-col gap-5  md:flex-row md:justify-between">
      <JobCards />
    </div>
  );
}

export default JobPage;
