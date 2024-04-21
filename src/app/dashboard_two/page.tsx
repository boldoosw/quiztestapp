"use client";
import React from "react";
import LessonCards from "@/components/Cards/LessonCards";
import UserInfo from "../userinfo/page";
import ClimovChart from "@/components/Charts/ClimovChart";
import HollandChart from "@/components/Charts/HollandChart";

import MatrixChart from "@/components/Charts/MatrixChart";
import { MChart } from "@/components/Charts/MChart";
const rowTable = [
  { id: 0, name: "Бодит байдлыг эрхэмлэгч" },
  { id: 1, name: "Шинжээч судлаач" },
  { id: 2, name: "Урлагийн" },
  { id: 3, name: "Нийгмийн" },
  { id: 4, name: "Удирдан зохион байгуулах" },
  { id: 5, name: "Стандартыг баримтлагч" },
];
const colTable = [
  { id: 0, name: "Хүн" },
  { id: 1, name: "Байгаль" },
  { id: 2, name: "Тэмдэгт" },
  { id: 3, name: "Техник" },
  { id: 4, name: "Урлаг" },
];

const DashboardTwo: React.FC = () => {
  return (
    <main>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <UserInfo />
          {/* <ChartTwo /> */}
        </div>
        <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ClimovChart />
          <HollandChart />
        </div>

        <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <MChart />
        </div>

        <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8 w-full">
          Зөвлөмж.<br></br>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
          officia reiciendis aliquid doloribus hic laborum provident ut eligendi
          facilis minus magnam ipsum ipsa optio dignissimos, excepturi iusto
          facere consectetur, sed perferendis porro. Eum totam dolorem natus
          enim perferendis deleniti cum expedita nulla quo ea itaque laborum,
          exercitationem earum saepe commodi laudantium! Dolore repudiandae
          minima ducimus suscipit, minus perferendis? A, temporibus.
        </div>
      </div>
    </main>
  );
};

export default DashboardTwo;
