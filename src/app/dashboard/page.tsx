"use client";
import ChartOne from "@/components/Charts/ChartOne";
import ChartTwo from "@/components/Charts/ChartTwo";
import React from "react";
import { Quicksand } from "next/font/google";
import LessonCards from "@/components/Cards/LessonCards";

import UserInfo from "../userinfo/page";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
export default function page() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div>
        <UserInfo />
      </div>
      <div className="bg-[#6cad6c] text-white text-center  p-4 text-[14px] mt-8 w-full">
        Танд ойр мэргэжлүүдийг доор зургаар үзүүлэв.
      </div>
      <div className="flex flex-col gap-5  md:flex-row md:justify-between">
        <LessonCards />
      </div>
      <>
        <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* <ChartTwo />
          <ChartOne /> */}
          {/* <ChartThree /> */}
          {/* <MapOne />
          <div className="col-span-12 xl:col-span-8">
            <TableOne />
          </div>
          <ChatCard /> */}
        </div>
        <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8 w-full">
          Зөвлөмж.<br></br> Таны сонгосон мэргэжил өөрийн тань мэргэжлийн хэв
          шинжид нийцэж байгаа эсэхээс тухайн мэргэжилдээ гаргах амжилт ихээхэн
          шалтгаална. Энэхүү тест нь таны мэргэжлийн тэр төрлийг тодорхойлоход
          тусална. 42 хос мэргэжлээс өөрт тань таалагдах нэгийг сонгоно уу.
        </div>
      </>
    </main>
  );
}
