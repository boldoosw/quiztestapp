"use client";
import React, { useState, useEffect } from "react";
import { Quicksand } from "next/font/google";
import LessonCards from "@/components/Cards/LessonCards";

import UserInfo from "../userinfo/page";
import ChartCustomTest from "./ChartCustomTest";
import ChartTwo from "@/components/Charts/ChartTwo";
import ChartOne from "@/components/Charts/ChartOne";
import ChatCard from "@/components/Chat/ChatCard";
import ChartThree from "@/components/Charts/ChartThree";
import MapOne from "@/components/Maps/MapOne";
import TableOne from "@/components/Tables/TableOne";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function page() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="mx-auto max-w-270">
        <div className="grid grid-cols-5 gap-8">
          <UserInfo />
          <div className="col-span-5 xl:col-span-3">
            <ChartCustomTest />
          </div>
        </div>
      </div>
      <div className="bg-[#6cad6c] text-white text-center  p-4 text-[14px] mt-8 w-full">
        Танд ойр мэргэжлүүдийг доор зургаар үзүүлэв.
      </div>
      <div className="flex flex-col gap-5  md:flex-row md:justify-between">
        <LessonCards />
      </div>

      <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8 w-full">
        Зөвлөмж.<br></br>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
        officia reiciendis aliquid doloribus hic laborum provident ut eligendi
        facilis minus magnam ipsum ipsa optio dignissimos, excepturi iusto
        facere consectetur, sed perferendis porro. Eum totam dolorem natus enim
        perferendis deleniti cum expedita nulla quo ea itaque laborum,
        exercitationem earum saepe commodi laudantium! Dolore repudiandae minima
        ducimus suscipit, minus perferendis? A, temporibus.
      </div>
    </main>
  );
}
