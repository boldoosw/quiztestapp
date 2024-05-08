"use client";
import React, { useRef } from "react";
import { useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";

import CustomChart from "@/components/Charts/CustomChart";
import YesNoChart from "@/components/Charts/YesNoChart";
import LessonCards from "@/components/Cards/LessonCards";
import UserInfo from "@/components/UserInfo";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import domToPdf from "dom-to-pdf";
// import { fetchUser } from "@/app/lib/data";

const DashboardOne = () => {
  const searchParams = useSearchParams();
  const { data: session, status: sessionStatus } = useSession();

  const email = searchParams ? searchParams.get("email") : session.user?.email;

  // const user = await fetchUser(id);

  const pdfRef = useRef();
  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4", false);
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

  const element = document.querySelector(".summary-report-container");

  const options = {
    filename: "test.pdf",
  };

  const generatePdf = () => {
    const element = document.querySelector(".summary-report-container");

    const options = {
      filename: "test.pdf",
    };

    return domToPdf(element, options, () => {
      console.log("done");
      // callback function
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
