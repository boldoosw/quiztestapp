"use client";
import { lessons } from "@/utils/lessons";
import React, { Component } from "react";
import Image from "next/image";
import prof_header from "@/assets/images/profession.png";
import { BasicModal } from "@/components/BasicModal";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const basePath = "/assets/images/profession_images";

export const Checkbox = ({
  isChecked,
  label,
  checkHandler,
  index,
  isDisabled,
}) => {
  return (
    <div>
      <input
        className="mr-2"
        type="checkbox"
        id={`checkbox-${index}`}
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

  onCloseModal0 = () => {
    this.setState({ openModal0: false });
  };
  onClickButton1 = (e) => {
    e.preventDefault();
    this.setState({ openModal1: true });
  };

  onCloseModal1 = () => {
    this.setState({ openModal1: false });
  };
  onClickButton2 = (e) => {
    e.preventDefault();
    this.setState({ openModal2: true });
  };

  onCloseModal2 = () => {
    this.setState({ openModal2: false });
  };
  onClickButton3 = (e) => {
    e.preventDefault();
    this.setState({ openModal3: true });
  };

  onCloseModal3 = () => {
    this.setState({ openModal3: false });
  };
  onClickButton4 = (e) => {
    e.preventDefault();
    this.setState({ openModal4: true });
  };

  onCloseModal4 = () => {
    this.setState({ openModal4: false });
  };
  onClickButton5 = (e) => {
    e.preventDefault();
    this.setState({ openModal5: true });
  };

  onCloseModal5 = () => {
    this.setState({ openModal5: false });
  };
  onClickButton6 = (e) => {
    e.preventDefault();
    this.setState({ openModal6: true });
  };

  onCloseModal6 = () => {
    this.setState({ openModal6: false });
  };
  onClickButton7 = (e) => {
    e.preventDefault();
    this.setState({ openModal7: true });
  };

  onCloseModal7 = () => {
    this.setState({ openModal7: false });
  };
  onClickButton8 = (e) => {
    e.preventDefault();
    this.setState({ openModal8: true });
  };

  onCloseModal8 = () => {
    this.setState({ openModal8: false });
  };
  onClickButton9 = (e) => {
    e.preventDefault();
    this.setState({ openModal9: true });
  };

  onCloseModal9 = () => {
    this.setState({ openModal9: false });
  };
  onClickButton10 = (e) => {
    e.preventDefault();
    this.setState({ openModal10: true });
  };

  onCloseModal10 = () => {
    this.setState({ openModal10: false });
  };
  onClickButton11 = (e) => {
    e.preventDefault();
    this.setState({ openModal11: true });
  };

  onCloseModal11 = () => {
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

    return (
      <div>
        <main
          className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
        >
          <Image className="sm:w-full" src={prof_header} alt="prof-logo" />
          <div className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
            {lessons.map(({ name, price, img, img_detail }, index) => (
              <>
                <div
                  key={index}
                  className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
                >
                  <Image
                    width={64}
                    height={18}
                    className=" object-cover"
                    src={`${basePath}/${img}.png`}
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
                    label={name}
                    index={index}
                    isDisabled={!checked[index] && disabled}
                  />{" "}
                  <Modal
                    open={eval(`this.state.openModal${index}`)}
                    onClose={eval(`this.onCloseModal${index}`)}
                  >
                    <h1>{eval(`this.onCloseModal${index}`)}</h1>
                    <Image
                      width={600}
                      height={600}
                      className=" object-cover w-full"
                      src={`${basePath}/${img_detail}.png`}
                      alt=""
                    />
                  </Modal>
                </div>
              </>
            ))}
          </div>
        </main>
      </div>
    );
  }
}
