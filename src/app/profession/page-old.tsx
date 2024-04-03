"use client";
import React, { useState } from "react";
import Image from "next/image";

import prof_header from "@/assets/images/profession.png";

import biology from "@/assets/images/profession_images/biology.png";
import biology_detail from "@/assets/images/profession_images/biology-detail.png";
import chemic from "@/assets/images/profession_images/chemic.png";
import chemic_detail from "@/assets/images/profession_images/chemic-detail.png";
import culture from "@/assets/images/profession_images/culture.png";
import culture_detail from "@/assets/images/profession_images/culture-detail.png";
import economy from "@/assets/images/profession_images/economy.png";
import economy_detail from "@/assets/images/profession_images/economy-detail.png";
import english from "@/assets/images/profession_images/english.png";
import english_detail from "@/assets/images/profession_images/english-detail.png";
import geography from "@/assets/images/profession_images/geography.png";
import geography_detail from "@/assets/images/profession_images/geography-detail.png";
import history from "@/assets/images/profession_images/history.png";
import history_detail from "@/assets/images/profession_images/history-detail.png";
import it from "@/assets/images/profession_images/it.png";
import it_detail from "@/assets/images/profession_images/it-detail.png";
import literature from "@/assets/images/profession_images/literature.png";
import literature_detail from "@/assets/images/profession_images/literature-detail.png";
import math from "@/assets/images/profession_images/math.png";
import math_detail from "@/assets/images/profession_images/math-detail.png";
import physics from "@/assets/images/profession_images/physics.png";
import physics_detail from "@/assets/images/profession_images/physics-detail.png";
import sport from "@/assets/images/profession_images/sport.png";
import sport_detail from "@/assets/images/profession_images/sport-detail.png";

import { Quicksand } from "next/font/google";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

function ProfessionPage() {
  const [showModal1, setShowModal1] = React.useState(false);
  const [showModal2, setShowModal2] = React.useState(false);
  const [showModal3, setShowModal3] = React.useState(false);
  const [showModal4, setShowModal4] = React.useState(false);
  const [showModal5, setShowModal5] = React.useState(false);
  const [showModal6, setShowModal6] = React.useState(false);
  const [showModal7, setShowModal7] = React.useState(false);
  const [showModal8, setShowModal8] = React.useState(false);
  const [showModal9, setShowModal9] = React.useState(false);
  const [showModal10, setShowModal10] = React.useState(false);
  const [showModal11, setShowModal11] = React.useState(false);
  const [showModal12, setShowModal12] = React.useState(false);

  return (
    <div>
      <main
        className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full flex flex-col items-center`}
      >
        {/* <section className="h-screen w-screen bg-gradient-to-br from-pink-50 to-indigo-100 p-8"> */}
        <Image className="sm:w-full" src={prof_header} alt="prof-logo" />
        <div className="grid justify-center md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7 my-10">
          {/* <!-- Card 1 --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden cursor-hand">
            <Image
              width={64}
              height={18}
              className=" object-cover"
              src={literature}
              alt=""
              onClick={() => setShowModal1(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Монгол хэл, Уран зохиол
              </h3>
            </div>
          </div>
          {showModal1 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Монгол хэл Уран Зохиол
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={literature_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal1(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card 2 --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={math}
              alt=""
              onClick={() => setShowModal2(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Математик
              </h3>
            </div>
          </div>
          {showModal2 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Математик</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={math_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal2(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"3" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={it}
              alt=""
              onClick={() => setShowModal3(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Мэдээлэл технологи
              </h3>
            </div>
          </div>
          {showModal3 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Мэдээлэл технологи
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image className=" object-cover" src={it_detail} alt="" />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal3(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"4" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={physics}
              alt=""
              onClick={() => setShowModal4(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Физик
              </h3>
            </div>
          </div>
          {showModal4 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Физик</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={physics_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal4(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"5" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={history}
              alt=""
              onClick={() => setShowModal5(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Түүх
              </h3>
            </div>
          </div>
          {showModal5 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Түүх </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={history_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal5(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"6" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={english}
              alt=""
              onClick={() => setShowModal6(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Англи хэл
              </h3>
            </div>
          </div>
          {showModal6 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Англи хэл</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={english_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal6(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"7" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={culture}
              alt=""
              onClick={() => setShowModal7(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Хөгжим бүжиг
              </h3>
            </div>
          </div>
          {showModal7 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Хөгжим бүжиг</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={culture_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal7(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"8" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={biology}
              alt=""
              onClick={() => setShowModal8(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Биологи
              </h3>
            </div>
          </div>
          {showModal8 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Биологи</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={biology_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal8(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"9" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={economy}
              alt=""
              onClick={() => setShowModal9(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Нийгэм
              </h3>
            </div>
          </div>
          {showModal9 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Нийгэм</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={economy_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal9(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"10" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={chemic}
              alt=""
              onClick={() => setShowModal10(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Хими
              </h3>
            </div>
          </div>
          {showModal10 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Хими</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={chemic_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal10(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
          {/* <!-- Card"11" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={geography}
              alt=""
              onClick={() => setShowModal11(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Газар зүй
              </h3>
            </div>
          </div>
          {showModal11 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Газар зүй</h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={geography_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal11(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}

          {/* <!-- Card"12" --> */}
          <div className="flex flex-row bg-white p-2 rounded border shadow shadow-slate-500 max-w-xs md:max-w-none overflow-hidden">
            <Image
              width={64}
              height={24}
              className=" object-cover"
              src={sport}
              alt=""
              onClick={() => setShowModal12(true)}
            />
            <div className="p-3 text-center">
              <h3 className="font-semibold text-sm leading-6 text-gray-700 my-2">
                Биеийн тамир,спорт
              </h3>
            </div>
          </div>
          {showModal12 ? (
            <>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Биеийн тамир спорт
                      </h3>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <Image
                        className=" object-cover"
                        src={sport_detail}
                        alt=""
                      />
                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal12(false)}
                      >
                        Хаах
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </div>
        {/* </section> */}
      </main>
    </div>
  );
}

export default ProfessionPage;
