"use client";
import React, { useState, useEffect } from "react";
import { Quicksand } from "next/font/google";
import Image from "next/image";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { professionsData } from "@/bin/ProfessionData";
import "@/app/globals.css";
const basePath = "/assets/images/profession_images";
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function ProfessionsPage() {
  const router = useRouter();
  const [professions_data, setData] = useState([]);
  const [checkedCount, setCheckedCount] = useState(0);
  const [error, setError] = useState("");
  const [openModal0, setOpenModal0] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);
  const [openModal2, setOpenModal2] = useState(false);
  const [openModal3, setOpenModal3] = useState(false);
  const [openModal4, setOpenModal4] = useState(false);
  const [openModal5, setOpenModal5] = useState(false);
  const [openModal6, setOpenModal6] = useState(false);
  const [openModal7, setOpenModal7] = useState(false);
  const [openModal8, setOpenModal8] = useState(false);
  const [openModal9, setOpenModal9] = useState(false);
  const [openModal10, setOpenModal10] = useState(false);
  const [openModal11, setOpenModal11] = useState(false);

  const onClickButton0 = () => {
    setOpenModal0(true);
  };
  const onClickButton1 = () => {
    setOpenModal1(true);
  };
  const onClickButton2 = () => {
    setOpenModal2(true);
  };
  const onClickButton3 = () => {
    setOpenModal3(true);
  };
  const onClickButton4 = () => {
    setOpenModal4(true);
  };
  const onClickButton5 = () => {
    setOpenModal5(true);
  };
  const onClickButton6 = () => {
    setOpenModal6(true);
  };
  const onClickButton7 = () => {
    setOpenModal7(true);
  };
  const onClickButton8 = () => {
    setOpenModal8(true);
  };
  const onClickButton9 = () => {
    setOpenModal9(true);
  };
  const onClickButton10 = () => {
    setOpenModal10(true);
  };
  const onClickButton11 = () => {
    setOpenModal11(true);
  };

  const onCloseModal = () => {
    setOpenModal0(false);
    setOpenModal1(false);
    setOpenModal2(false);
    setOpenModal3(false);
    setOpenModal4(false);
    setOpenModal5(false);
    setOpenModal6(false);
    setOpenModal7(false);
    setOpenModal8(false);
    setOpenModal9(false);
    setOpenModal10(false);
    setOpenModal11(false);
  };

  useEffect(() => {
    setData(professionsData);
  }, []);
  return (
    <main
      className={` ${quicksand.variable}  font-quicksand  m-auto max-w-[900px] w-full flex flex-col items-center`}
    >
      {/* <Image className="sm:w-full" src={prof_header} alt="prof-logo" /> */}

      <h2 className="text-m font-semibold mt-8">
        Мэргэжлийн каталог - салбараар
      </h2>

      <div
        key="main"
        className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10"
      >
        {professions_data.map((profession, t_index) => (
          <>
            <div
              key={profession.name + t_index}
              className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center "
            >
              <Image
                width={160}
                height={200}
                className=" object-cover overflow-hidden cursor-hand shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 "
                src={`${basePath}/${profession.img}.png`}
                alt=""
                onClick={eval(`onClickButton${t_index}`)}
              />

              <Modal
                key={t_index}
                open={eval(`openModal${t_index}`)}
                onClose={eval(`onCloseModal`)}
              >
                <h1>{eval(`onCloseModal`)}</h1>
                <Image
                  width={900}
                  height={400}
                  className=" w-full h-96"
                  src={`${basePath}/${profession.img_detail}.png`}
                  alt=""
                />

                {/* <Image className="sm:w-full" src={prof_header} alt="prof-logo" /> */}

                <h2 className="text-m font-semibold mt-8">{profession.name}</h2>

                <div
                  key="main"
                  className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7 my-10"
                >
                  {profession.details.map((detail, p_index) => (
                    <>
                      <div className="flex flex-col">
                        <div
                          key={detail.content_title + p_index}
                          className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
                        >
                          <Link
                            href={`/professions/${profession?.profession_name}?t=${t_index}&&p=${p_index}&&#${detail?.content_title}`}
                          >
                            <Image
                              width={160}
                              height={200}
                              className=" object-cover"
                              src={`${basePath}/detail_images/${detail.content_image}.png`}
                              alt=""
                            />
                          </Link>
                        </div>
                        <p className="text-sm">{detail.content_title}</p>
                      </div>
                    </>
                  ))}
                  <p className="text-red-600 mb-4 text-[16px]">
                    {error && error}
                  </p>
                </div>
              </Modal>
            </div>
          </>
        ))}

        <p className="text-red-600 mb-4 text-[16px]">{error && error}</p>
      </div>
    </main>
  );
}

export default ProfessionsPage;
