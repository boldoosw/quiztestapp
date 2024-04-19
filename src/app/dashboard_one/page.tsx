"use client";
import React from "react";
import UserInfo from "../userinfo/page";
import CustomChart from "@/components/Charts/CustomChart";
import LessonCards from "@/components/Cards/LessonCards";
const DashboardOne: React.FC = () => {
  return (
    <>
      {/* <!-- ===== Content Area Start ===== --> */}
      <div>
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="mt-4  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <UserInfo />
              <CustomChart />
            </div>
            <div className=" text-black text-bold text-center  p-4 text-[14px]">
              Танд ойр мэргэжлүүдийг доор зургаар үзүүлэв.
            </div>
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-6 xl:grid-cols-3  2xl:gap-7.5">
              <LessonCards />
            </div>
            <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8 w-full">
              Зөвлөмж.<br></br>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
              officia reiciendis aliquid doloribus hic laborum provident ut
              eligendi facilis minus magnam ipsum ipsa optio dignissimos,
              excepturi iusto facere consectetur, sed perferendis porro. Eum
              totam dolorem natus enim perferendis deleniti cum expedita nulla
              quo ea itaque laborum, exercitationem earum saepe commodi
              laudantium! Dolore repudiandae minima ducimus suscipit, minus
              perferendis? A, temporibus.
            </div>
            <div className=" text-center  p-4 text-[14px] mt-8 w-full">
              end yum oruulah
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
