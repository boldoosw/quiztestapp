"use client";
import Image from "next/image";
import holland from "@/assets/images/holland_logo.png";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Page() {
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();

  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }
  return (
    <div className="flex flex-col gap-5 py-5 md:flex-row-reverse md:justify-between">
      <div className="relative overflow-hidden rounded-2xl">
        <div className="md:w-[48rem]">
          {/* <Image src="/wallpaper.jpg" alt="" width={700} height={700} /> */}
          <Image
            className="absolute sm:h-full overflow-hidden"
            src={holland}
            alt="logo"
            width={700}
            height={700}
          />
        </div>
      </div>

      <div className="md:w-[50%] flex flex-col gap-5">
        <h1 className="text-2xl font-semibold">
          ХОЛЛАНДЫН МЭРГЭЖИЛ СОНГОЛТЫН ТЕСТ
        </h1>
        <p className="text-sm leading-6 text-gray-300">
          Америкийн сэтгэл судлаач, доктор Ж.Холланд хүний сэтгэл зүйн хэв шинж
          ба түүний мэргэжил хоёрын хоорондын уялдаа холбоог тогтоож, ажил
          мэргэжлийн хандлага ба мэргэжлийн чиглэлээр нийцтэй байх 6 хэв шинжийг
          боловсруулжээ. Та Холландын тестийг онлайнаар хийж өөрийн мэргэжлийн
          хэв шинжийг тодорхойлж, түүнд тохирхомжтой мэргэжлийг сонгоно уу.
        </p>
        <Link
          href={`/holland_test/quiz/`}
          className="flex items-center justify-center gap-1 px-5 py-4 font-semibold text-blue-500 transition-colors rounded-md outline duration-600 hover:bg-blue-600 hover:text-white"
        >
          {/* <TbArrowBigRightFilled className="text-lg" /> */}
          Холландын тест өгөх
        </Link>
      </div>
    </div>
  );
}
