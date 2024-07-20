"use client";
import React, { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import ClimovChart from "@/components/Charts/ClimovChart";
import HollandChart from "@/components/Charts/HollandChart";
import { MChart } from "@/components/Charts/MChart";
import YesNoChart from "@/components/Charts/YesNoChart";
import UserInfo from "@/components/UserInfo";
import TopicInfo from "@/components/TopicInfo";
const DashboardTwo = () => {
  const [loader, setLoader] = useState(false);
  const searchParams = useSearchParams();

  const { data: session, status: sessionStatus } = useSession();

  const email = searchParams.get("email");
  const topic_id = searchParams.get("topic_id");
  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }
  return (
    <main>
      <div className="actual-receipt mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <UserInfo email={email} />
        </div>
        <div className="  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <YesNoChart email={email} />
        </div>

        <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <ClimovChart email={email} />
        </div>
        <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <HollandChart email={email} />
        </div>
        <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* <MChart email={email} /> */}
        </div>
        <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          <TopicInfo topic_id={topic_id} />
        </div>
      </div>
    </main>
  );
};

export default DashboardTwo;
