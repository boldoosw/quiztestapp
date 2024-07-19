"use client";

import { useSearchParams } from "next/navigation";
import { useSession, useEffect, useState } from "next-auth/react";

import CustomChart from "@/components/Charts/CustomChart";
import YesNoChart from "@/components/Charts/YesNoChart";
import LessonCards from "@/components/Cards/LessonCards";
import UserInfo from "@/components/UserInfo";

const DashboardOne = async () => {
  const searchParams = useSearchParams();
  const { data: session, status: sessionStatus } = useSession();

  const email = searchParams ? searchParams.get("email") : session.user?.email;
  const id = searchParams ? searchParams.get("id") : session.user?._id;
  const [searchedUser, setData] = useState({});
  async function fetchUserData() {
    const { data } = await axios.get(`/api/user`, {
      params: { user_email: email },
    });

    setData({ ...data.existinguser });
    // console.log("user_data:", user_data?.firstname);
  }
  useEffect(() => {
    fetchUserData();
  }, []);
  console.log("searchUser:", searchedUser);
  return (
    <>
      {/* <!-- ===== Content Area Start ===== --> */}
      <div>
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
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
            <div className="grid grid-cols-1 gap-4  md:grid-cols-2 md:gap-6 xl:grid-cols-3  2xl:gap-7.5">
              <LessonCards />
            </div>

            <div className="bg-[#a03043] text-white text-center  p-4 text-[14px] mt-8 w-full">
              Зөвлөмж.<br></br>
              {searchParams.get("id")}
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
