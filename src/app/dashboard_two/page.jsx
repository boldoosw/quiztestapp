"use client";
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";

import { useSession } from "next-auth/react";

import ClimovChart from "@/components/Charts/ClimovChart";
import HollandChart from "@/components/Charts/HollandChart";
import { MChart } from "@/components/Charts/MChart";
import YesNoChart from "@/components/Charts/YesNoChart";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const DashboardTwo = () => {
  const searchParams = useSearchParams();
  const { data: session, status: sessionStatus } = useSession();

  const email = searchParams.get("email") | session?.user?.email;

  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 30;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("10-12анги.pdf");
    });
  };
  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }
  return (
    <main ref={pdfRef}>
      <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
        <div className="mt-4  grid grid-cols-12 content-center gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
          {/* <UserInfo /> */}
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
          <MChart email={email} />
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
      <div className=" text-center  p-4 text-[14px] mt-8 w-full">
        <button className="btn btn-primary" onClick={downloadPDF}>
          Download PDF
        </button>
      </div>
    </main>
  );
};

export default DashboardTwo;
