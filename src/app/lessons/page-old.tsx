"use client";
import { useState } from "react";
import { lessons } from "@/utils/lessons";

import Image from "next/image";
import prof_header from "@/assets/images/profession.png";

import { Quicksand } from "next/font/google";
import React from "react";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const basePath = "/assets/images/profession_images";
const getFormattedPrice = (price: number) => `$${price.toFixed(2)}`;

export default function App() {
  const [checkedState, setCheckedState] = useState(
    new Array(lessons.length).fill(false)
  );
  const [showModal_0, setShowModal_0] = React.useState(false);
  const [showModal_1, setShowModal_1] = React.useState(false);
  const [showModal_2, setShowModal_2] = React.useState(false);
  const [showModal_3, setShowModal_3] = React.useState(false);
  const [showModal_4, setShowModal_4] = React.useState(false);
  const [showModal_5, setShowModal_5] = React.useState(false);
  const [showModal_6, setShowModal_6] = React.useState(false);
  const [showModal_7, setShowModal_7] = React.useState(false);
  const [showModal_8, setShowModal_8] = React.useState(false);
  const [showModal_9, setShowModal_9] = React.useState(false);
  const [showModal_10, setShowModal_10] = React.useState(false);
  const [showModal_11, setShowModal_11] = React.useState(false);

  const [total, setTotal] = useState(0);

  const handleOnChange = (position: number) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);

    const totalPrice = updatedCheckedState.reduce(
      (sum, currentState, index) => {
        if (currentState === true) {
          return sum + lessons[index].price;
        }
        return sum;
      },
      0
    );

    setTotal(totalPrice);
  };

  return (
    <div>
      <main
        className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
      >
        <Image className="sm:w-full" src={prof_header} alt="prof-logo" />
        <div className="w-full grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          {lessons.map(({ name, price, img, img_detail }, index) => {
            return (
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
                  onClick={() => `setShowModal_${index}(true)`}
                />
                <div className="toppings-list-item">
                  <div className="left-section m-2">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedState[index]}
                      onChange={() => handleOnChange(index)}
                    />
                    <label className="m-2" htmlFor={`custom-checkbox-${index}`}>
                      {name}
                    </label>
                  </div>
                  {/* <div className="right-section">
                    {getFormattedPrice(price)}
                  </div> */}
                  {!`showModal_${index}` ? (
                    <>
                      <div
                        key={name + index}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                      >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                          {/*content*/}
                          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                              <h3 className="text-3xl font-semibold">{name}</h3>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                              <Image
                                className=" object-cover"
                                src={`/assets/images/profession_images/${img_detail}.png`}
                                alt=""
                                width={400}
                                height={400}
                              />
                            </div>
                            {/*footer*/}
                            <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                              <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => `setShowModal_${index}(false)`}
                              >
                                Хаах
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            );
          })}

          <div className="toppings-list-item">
            <div className="left-section">Total:</div>
            <div className="right-section">{getFormattedPrice(total)}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
