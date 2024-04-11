"use client";
import React, { Component } from "react";
import Image from "next/image";
import prof_header from "@/assets/images/profession.png";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import { useRouter } from "next/router";

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
        checked={isChecked}
        onChange={checkHandler}
        disabled={isDisabled}
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
export default class page extends Component {
  state = {
    openModal0: false,
    openModal1: false,
    openModal2: false,
    openModal3: false,
    openModal4: false,
    openModal5: false,
    openModal6: false,
    openModal7: false,
    openModal8: false,
    openModal9: false,
    openModal10: false,
    openModal11: false,
  };
  onClickButton0 = (e) => {
    e.preventDefault();
    this.setState({ openModal0: true });
  };
  onClickButton1 = (e) => {
    e.preventDefault();
    this.setState({ openModal1: true });
  };
  onClickButton2 = (e) => {
    e.preventDefault();
    this.setState({ openModal2: true });
  };
  onClickButton3 = (e) => {
    e.preventDefault();
    this.setState({ openModal3: true });
  };
  onClickButton4 = (e) => {
    e.preventDefault();
    this.setState({ openModal4: true });
  };
  onClickButton5 = (e) => {
    e.preventDefault();
    this.setState({ openModal5: true });
  };
  onClickButton6 = (e) => {
    e.preventDefault();
    this.setState({ openModal6: true });
  };
  onClickButton7 = (e) => {
    e.preventDefault();
    this.setState({ openModal7: true });
  };
  onClickButton8 = (e) => {
    e.preventDefault();
    this.setState({ openModal8: true });
  };
  onClickButton9 = (e) => {
    e.preventDefault();
    this.setState({ openModal9: true });
  };
  onClickButton10 = (e) => {
    e.preventDefault();
    this.setState({ openModal10: true });
  };
  onClickButton11 = (e) => {
    e.preventDefault();
    this.setState({ openModal11: true });
  };
  onCloseModal = () => {
    this.setState({ openModal0: false });
    this.setState({ openModal1: false });
    this.setState({ openModal2: false });
    this.setState({ openModal3: false });
    this.setState({ openModal4: false });
    this.setState({ openModal5: false });
    this.setState({ openModal6: false });
    this.setState({ openModal7: false });
    this.setState({ openModal8: false });
    this.setState({ openModal9: false });
    this.setState({ openModal10: false });
    this.setState({ openModal11: false });
  };

  state = { checked: {} };

  onSelectedChange = (index) => {
    this.setState((previousState) => ({
      checked: {
        ...previousState.checked,
        [index]: !previousState.checked[index],
      },
    }));
  };

  render() {
    const { checked } = this.state;
    const checkedCount = Object.keys(checked).filter(
      (key) => checked[key]
    ).length;
    const disabled = checkedCount > 2;

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

      checkArray.map((i) => {
        console.log(i);
        console.log(lesson_data[i].name);
      });

      // if (!title || !description) {
      //       alert("Title and description are required.");
      //       return;
      //     }

      try {
        const res = await fetch("http://localhost:3000/api/mbti_test", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ checkbox_items, email }),
        });

        if (res.ok) {
          console.log("amjilttai hadgallaa");
          router.refresh();
          router.push("/dashboard");
        } else {
          throw new Error("Failed to create a mbti");
        }
      } catch (error) {
        console.log(error);
      }
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
                    onClick={eval(`this.onClickButton${index}`)}
                  />
                  <Checkbox
                    key={index}
                    id={`checkbox-${index}`}
                    name={`checkbox-${index}`}
                    isChecked={checked[index] || false}
                    checkHandler={() => this.onSelectedChange(index)}
                    disabled={!checked[index] && disabled}
                    label={lesson.name}
                    index={index}
                    isDisabled={!checked[index] && disabled}
                  />{" "}
                  <Modal
                    open={eval(`this.state.openModal${index}`)}
                    onClose={eval(`this.onCloseModal`)}
                  >
                    <h1>{eval(`this.onCloseModal`)}</h1>
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
}
