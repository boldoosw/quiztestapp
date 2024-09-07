"use client";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { userRef, useSession, useEffect, useState } from "next-auth/react";
import tailan from "@/assets/images/tailan_zurag/tailan_header.png";
import contactus from "@/assets/images/contactus.png";
import home8_9 from "@/assets/images/8-9.png";
import CustomChart from "@/components/Charts/CustomChart";
import YesNoChart from "@/components/Charts/YesNoChart";
import LessonCards from "@/components/Cards/LessonCards";
import UserInfo from "@/components/UserInfo";
import TopicInfo from "@/components/TopicInfo";

const DashboardOne = () => {
  const searchParams = useSearchParams();
  const { data: session, status: sessionStatus } = useSession();
  const role = searchParams ? searchParams.get("role") : session?.user?.role;
  const email = searchParams ? searchParams.get("email") : session.user?.email;
  const topic_id = searchParams
    ? searchParams.get("topic_id")
    : session.user?.topic_id;
  if (sessionStatus === "loading") {
    return <h1>Түр хүлээнэ үү...</h1>;
  }
  return (
    <>
      {/* <!-- ===== Content Area Start ===== --> */}
      <div>
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="flex flex-col  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[160px] w-full card-item-div  min-h-[160px]">
            <Image className="h-[80px] sm:h-full " src={tailan} alt="logo" />
          </div>
          <div className="flex flex-col mt-6  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-tl-[35px] rounded-bl-[35px] rounded-br-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div  min-h-[260px]">
            <Image className="h-[80px] sm:h-full " src={home8_9} alt="logo" />
            <div className="mt-4">
              <button
                type="button"
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                START / ГАРАА
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <UserInfo email={email} />
            </div>
            <div className="  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <YesNoChart email={email} />
            </div>
            <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <CustomChart email={email} />
            </div>
            <div className=" text-black text-bold text-center  p-4 text-[14px]">
              Танд ойр мэргэжлүүдийг доор зургаар үзүүлэв.
            </div>
            <div>
              <LessonCards email={email} />
            </div>
            <div className="flex flex-col mt-4  bg-white justify-center py-6 px-10 items-center shadow-2xl md:min-h-[340px] w-full card-item-div  min-h-[260px]">
              <Image
                className="h-[80px] sm:h-full "
                src={contactus}
                alt="logo"
              />
            </div>
            <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8   grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              {/* {topic_id} */}
              <TopicInfo role={role} topic_id={topic_id} />
            </div>
          </div>
        </main>
        {/* <!-- ===== Main Content End ===== --> */}
      </div>
      {/* <!-- ===== Content Area End ===== --> */}
    </>
  );
};

export default DashboardOne;
