"use client";
import ClimovChart from "@/components/Charts/ClimovChart";
import HollandChart from "@/components/Charts/HollandChart";
import MatrixChart from "@/components/Charts/MatrixChart";
import React from "react";

function page() {
  return (
    <div>
      <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ClimovChart />
        <HollandChart />
      </div>
      <MatrixChart />
    </div>
  );
}

export default page;
