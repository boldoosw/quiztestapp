"use client";
import React, { useRef, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import ClimovChart from "@/components/Charts/ClimovChart";
import HollandChart from "@/components/Charts/HollandChart";
import { MChart } from "@/components/Charts/MChart";
import YesNoChart from "@/components/Charts/YesNoChart";
import UserInfo from "@/components/UserInfo";

const DashboardTwo = () => {
  const [loader, setLoader] = useState(false);
  const searchParams = useSearchParams();
  const { data: session, status: sessionStatus } = useSession();

  const email = searchParams.get("email");

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
