"use client";
import React, { useState } from "react";
import Image from "next/image";
import prof_header from "@/assets/images/profession.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useRouter } from "next/navigation";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const basePath = "/assets/images/profession_images";
const lesson_data = [
  {
    name: "Монгол хэл, Уран зохиол",
    img: "literature",
    img_detail: "literature-detail",
    checked: false,
  },
  {
    name: "Математик",
    img: "math",
    img_detail: "math-detail",
    checked: false,
  },
  {
    name: "Мэдээлэл технологи",
    img: "it",
    img_detail: "it-detail",
    checked: false,
  },
  {
    name: "Физик",
    img: "physics",
    img_detail: "physics-detail",
    checked: false,
  },
  {
    name: "Түүх",
    img: "history",
    img_detail: "history-detail",
    checked: false,
  },
  {
    name: "Англи хэл",
    img: "english",
    img_detail: "english-detail",
    checked: false,
  },
  {
    name: "Хөгжим бүжиг",
    img: "culture",
    img_detail: "culture-detail",
    checked: false,
  },
  {
    name: "Биологи",
    img: "biology",
    img_detail: "biology-detail",
    checked: false,
  },
  {
    name: "Нийгэм",
    img: "economy",
    img_detail: "economy-detail",
    checked: false,
  },
  {
    name: "Хими",
    img: "chemic",
    img_detail: "chemic-detail",
    checked: false,
  },
  {
    name: "Газар зүй",
    img: "geography",
    img_detail: "geography-detail",
    checked: false,
  },
  {
    name: "Биеийн тамир,спорт",
    img: "sport",
    img_detail: "sport-detail",
    checked: false,
  },
];

const Checkbox = ({ isChecked, label, checkHandler, index, isDisabled }) => {
  return (
    <div>
      <input
        className="mr-2"
        type="checkbox"
        id={`checkbox-${index}`}
        name="lessons"
        // checked={isChecked}
        onChange={checkHandler}
        // disabled={isDisabled}
      />
      <label
        className="font-semibold text-sm leading-6 text-gray-700 my-2"
        htmlFor={`checkbox-${index}`}
      >
        {label}
      </label>
    </div>
  );
};
function LessonsPage() {
  const router = useRouter();

  const [checkedCount, setCheckedCount] = useState(0);

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
    setOpenModal11(false);
    setOpenModal12(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let checkArray = [];
    for (let i = 0; i < 12; i++) {
      if (e.target[i].checked === true) {
        checkArray.push(i);
      }
    }
    let checkbox_items = checkArray.toString();

    let email = "boldoosw@gmail.com";
    try {
      const res = await fetch(`/api/lesson_test`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ checkbox_items, email }),
      });

      if (res.ok) {
        console.log("amjilttai hadgallaa");
        router.refresh();
        router.push("/dashboard_one");
      } else {
        throw new Error("Failed to create a mbti");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const handleChange = (e) => {
    // Destructuring
    const { checked } = e.target;

    // Case 1 : The user checks the box
    if (checked) setCheckedCount(checkedCount + 1);
    // Case 2 : The user unchecks the box
    else if (checkedCount >= 1) setCheckedCount(checkedCount - 1);

    console.log("checked count:", checkedCount);
    const disabled = checkedCount > 2;
  };

  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
    >
      <Image className="sm:w-full" src={prof_header} alt="prof-logo" />

      <form onSubmit={handleSubmit}>
        <div
          key="main"
          className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
        >
          {lesson_data.map((lesson, index) => (
            <>
              <div
                key={lesson.name + index}
                className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
              >
                <Image
                  width={64}
                  height={64}
                  className=" object-cover"
                  src={`${basePath}/${lesson.img}.png`}
                  alt=""
                  onClick={eval(`onClickButton${index}`)}
                />
                <Checkbox
                  key={index}
                  id={`checkbox-${index}`}
                  name={`checkbox-${index}`}
                  //   isChecked={checked[index] || false}
                  //   checkHandler={() => onSelectedChange(index)}
                  checkHandler={handleChange}
                  label={lesson.name}
                  index={index}
                  //   disabled={!checked[index] && disabled}
                  //   isDisabled={!checked[index] && disabled}
                />{" "}
                <Modal
                  open={eval(`openModal${index}`)}
                  onClose={eval(`onCloseModal`)}
                >
                  <h1>{eval(`onCloseModal`)}</h1>
                  <Image
                    width={600}
                    height={600}
                    className=" object-cover w-full"
                    src={`${basePath}/${lesson.img_detail}.png`}
                    alt=""
                  />
                </Modal>
              </div>
            </>
          ))}
          {checkedCount === 3 && (
            <button
              type="submit"
              className="mb-2 me-2 rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Хадгал
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

export default LessonsPage;
