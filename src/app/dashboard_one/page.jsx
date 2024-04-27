"use client";
import React, { useRef } from "react";
import UserInfo from "../userinfo/page";
import CustomChart from "@/components/Charts/CustomChart";
import { YesNoChart } from "@/components/Charts/YesNoChart";
import LessonCards from "@/components/Cards/LessonCards";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
const DashboardOne = () => {
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
      pdf.save("8-9анги.pdf");
    });
  };
  return (
    <>
      {/* <!-- ===== Content Area Start ===== --> */}
      <div ref={pdfRef}>
        {/* <!-- ===== Main Content Start ===== --> */}
        <main>
          <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
            <div className="  grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
              <YesNoChart />
            </div>
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
              <button className="btn btn-primary" onClick={downloadPDF}>
                Download PDF
              </button>
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