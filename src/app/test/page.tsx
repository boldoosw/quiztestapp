"use client";
import React from "react";
import TanStackTable from "@/components/TanStackTable";
// import styles from "@/app/ui/dashboard/users/users.module.css";
import Link from "next/link";
export default function page() {
  return (
    <div className="pt-4 min-h-screen w-full bg-gray-900">
      <TanStackTable />
    </div>
  );
}
