import React from "react";
import { BasicModal } from "@/components/BasicModal";
import Link from "next/link";
type SearchParamProps = {
  searchParams: Record<string, string> | null | undefined;
};
export default function page({ searchParams }: SearchParamProps) {
  const show = searchParams?.show;
  return (
    <>
      <Link href="/lessons/test/?show=true">SUMMON THE MODAL</Link>

      {show && <BasicModal />}
    </>
  );
}
