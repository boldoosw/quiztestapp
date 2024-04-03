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

const Checkbox = ({ isChecked, label, checkHandler, index, isDisabled }) => {
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
    console.log(checked);
  };

  render() {
    const { checked } = this.state;
    const checkedCount = Object.keys(checked).filter(
      (key) => checked[key]
    ).length;
    const disabled = checkedCount > 2;

    return (
      <main
        className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
      >
        <Image className="sm:w-full" src={prof_header} alt="prof-logo" />
        <div
          key="main"
          className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10"
        >
          {lessons.map(({ name, price, img, img_detail }, index) => (
            <>
              <div
                key={name + index}
                className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand items-center"
              >
                <Image
                  width={64}
                  height={64}
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
                  onClose={eval(`this.onCloseModal`)}
                >
                  <h1>{eval(`this.onCloseModal`)}</h1>
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
    );
  }
}
