"use client";
import React, { useRef } from "react";
import ClimovChart from "@/components/Charts/ClimovChart";
import HollandChart from "@/components/Charts/HollandChart";
import MChart from "@/components/Charts/MChart";
import { useSearchParams } from "next/navigation";

const MatrixTest = () => {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  return (
    <div>
      <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ClimovChart email={email} />
        <HollandChart email={email} />
      </div>
      <MChart email={email} />
    </div>
  );
};

export default MatrixTest;
