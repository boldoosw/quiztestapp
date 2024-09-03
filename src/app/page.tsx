"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Quicksand } from "next/font/google";
import start_home from "@/assets/images/start-home.png";
import home8_9 from "@/assets/images/8-9.png";
import home10_12 from "@/assets/images/10-12.png";
import { useSession } from "next-auth/react";
import UsersPage from "@/components/UsersPage";
import { useEffect } from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function Home() {
  const router = useRouter();
  const { data: session }: any = useSession();
  useEffect(() => {
    if (!session) {
      router.push("/login");
    } else {
      if (session.user.role === "admin") router.push("/dashboard/users");
    }
  }, []);
  return (
    <div>
      {session?.user?.role === "angi8_9" && (
        <>
          {" "}
          <main>
            <div className="flex flex-col  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-bl-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div  min-h-[260px]">
              <Image className="h-[80px] sm:h-full " src={home8_9} alt="logo" />
              <div className="mt-4">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => router.push("/about8_9")}
                >
                  START / ГАРАА
                </button>
              </div>
            </div>
          </main>
        </>
      )}
      {session?.user?.role === "angi10_12" && (
        <>
          {" "}
          <main>
            <div className="flex flex-col  bg-white justify-center py-6 px-10 items-center rounded-tr-[35px] rounded-bl-[35px] shadow-2xl md:min-h-[340px] w-full card-item-div  min-h-[260px]">
              <Image
                className="h-[80px] sm:h-full "
                src={home10_12}
                alt="logo"
              />
              <div className="mt-4">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                  onClick={() => router.push("/about10_12")}
                >
                  START / ГАРАА
                </button>
              </div>
            </div>
          </main>
        </>
      )}
      {/* {session.user.role === "admin" && (
                <div className="mt-4">
                  <button
                    type="button"
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                    onClick={() => router.push("/dashboard/users")}
                  >
                    Хэрэглэгчиин жагсаалт руу очих
                  </button>
                </div>
              )} */}
    </div>
  );
}
