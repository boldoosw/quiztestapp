"use client";
import React, { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { professionsData } from "@/bin/ProfessionData";
import Image from "next/image";
function ProfessionPage() {
  const basePath = "/assets/images/profession_images";
  const [professions_data, setData] = useState([]);

  const searchParams = useSearchParams();

  const type = Number(searchParams.get("t"));
  const profession = Number(searchParams.get("p"));

  console.log("profession type:", type);
  console.log("profession id:", profession);

  useEffect(() => {
    setData(professionsData);
  }, []);
  return (
    <main
      className={`max-w-[900px]  bg-white w-full flex flex-col items-center`}
    >
      {/* <Image className="sm:w-full" src={prof_header} alt="prof-logo" /> */}
      <h3>{professions_data[type]?.name}</h3>
      <div className="actual-receipt  mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <Image
          width={900}
          height={400}
          className=" w-full h-96"
          src={`${basePath}/detail_images/${professions_data[type]?.details[profession]?.content_image}.png`}
          alt=""
        />
        <h3>{professions_data[type]?.details[profession]?.content_title}</h3>
      </div>
      <div>{professions_data[type]?.details[profession]?.content_detail}</div>
    </main>
  );
}

export default ProfessionPage;
