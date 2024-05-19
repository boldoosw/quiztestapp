"use client";
import Image from "next/image";
import climov from "@/assets/images/klimov.png";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import choose_lesson from "@/assets/images/choose-lesson2.png";
import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export default function Page() {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
    >
      <Image className="sm:w-full" src={choose_lesson} alt="choose_lesson" />
      <Link
        href={`/custom_test/quiz/`}
        className="flex items-center justify-center m-4 gap-1 px-5 py-4 font-semibold text-blue-500 transition-colors rounded-md outline duration-600 hover:bg-blue-600 hover:text-white"
      >
        {/* <TbArrowBigRightFilled className="text-lg" /> */}
        Хичээл сонголтын тест өгөх
      </Link>
    </main>
    // <div className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
    //   <div className="relative overflow-hidden rounded-2xl">
    //     <div className="md:w-[24rem] ">
    //       {/* <Image src="/wallpaper.jpg" alt="" width={700} height={700} /> */}
    //       <Image
    //         className="absolute sm:h-full overflow-hidden"
    //         src={climov}
    //         alt="logo"
    //         width={700}
    //         height={700}
    //       />
    //     </div>
    //   </div>

    //   <div className="md:w-[50%] flex flex-col gap-5">
    //     <h1 className="text-2xl font-semibold">МЭРГЭЖИЛ СОНГОЛТЫН ТЕСТ</h1>
    //     <p className="text-sm leading-6 text-gray-300">
    //       Америкийн сэтгэл судлаач, доктор Ж.Холланд хүний сэтгэл зүйн хэв шинж
    //       ба түүний мэргэжил хоёрын хоорондын уялдаа холбоог тогтоож, ажил
    //       мэргэжлийн хандлага ба мэргэжлийн чиглэлээр нийцтэй байх 6 хэв шинжийг
    //       боловсруулжээ. Та Холландын тестийг онлайнаар хийж өөрийн мэргэжлийн
    //       хэв шинжийг тодорхойлж, түүнд тохирхомжтой мэргэжлийг сонгоно уу.
    //     </p>
    //     <Link
    //       href={`/custom_test/quiz/`}
    //       className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-blue-500 transition-colors rounded-md outline duration-600 hover:bg-blue-600 hover:text-white"
    //     >
    //       {/* <TbArrowBigRightFilled className="text-lg" /> */}
    //       тест өгөх
    //     </Link>
    //   </div>
    // </div>
  );
}
