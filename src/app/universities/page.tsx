"use client";
import { Card, Typography } from "@material-tailwind/react";
import { Quicksand } from "next/font/google";

import "@/app/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

const TABLE_HEAD_ASHUS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_ASHUS = [
  {
    name: "Хүний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Шүдний их эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Уламжлалт анагаахын эмч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эм зүйч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Нийгмийн эрүүл мэнд судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Био-Анагаах судлалч ",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эрүүл мэндийн мэдээлэл зүйч ",
    lesson1: "Математик",
    lesson2: "Физик",
  },
  {
    name: "Эрүүл мэндийн нийгмийн ажилтан ",
    lesson1: "Биологи",
    lesson2: "Нийгмийн тухай мэдлэг",
  },
  {
    name: "Монгол анагаах ухааны засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Хөдөлгөөн засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Сувилахуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: "Эх барихуй",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
  {
    name: " Ахуй засалч",
    lesson1: "Хими",
    lesson2: "Биологи",
  },
];
const TABLE_HEAD_MUBIS = ["№", "Мэргэжлийн нэр", "ЭЕШалгалт1", "ЭЕШалгалт2"];

const TABLE_ROWS_MUBIS = [
  {
    name: "Сургуулийн өмнөх насны боловсролын багш",
    lesson1: "Монгол хэл",
    lesson2: "",
  },
  {
    name: "Бага ангийн багш",
    lesson1: "монгол хэл 50%",
    lesson2: "математик 50%",
  },
  {
    name: "Математикийн багш",
    lesson1: "Математик",
    lesson2: "",
  },
  {
    name: "Мэдээлэл зүйн багш",
    lesson1: "Математик",
    lesson2: "",
  },
  {
    name: "Физикийн багш",
    lesson1: "Физик",
    lesson2: "",
  },
  {
    name: "Химийн багш",
    lesson1: "Хими",
    lesson2: "",
  },
  {
    name: "Биологийн багш",
    lesson1: "Биологи",
    lesson2: "",
  },
  {
    name: "Газар зүйн багш",
    lesson1: "Газар зүй",
    lesson2: "",
  },
  {
    name: "Нийгмийн ухааны багш",
    lesson1: "Нийгмийн тухай мэдлэг",
    lesson2: "",
  },
  {
    name: "Түүхийн багш",
    lesson1: "Монголын түүх",
    lesson2: "",
  },
  {
    name: "Дүрслэх урлагийн багш Хөгжмийн багш",
    lesson1: "ур чадвар 70%",
    lesson2: "Монгол хэл Математик Нийгмийн тухай мэдлэг30%",
  },
  {
    name: "Зураг зүй дизайны багш",
    lesson1: "Монгол хэл Математик Физик 30%",
    lesson2: "",
  },
  {
    name: "Дизайн технологийн багш",
    lesson1: "Математик Физик 30%",
    lesson2: "",
  },
  {
    name: " Монгол хэл-Уран зохиолын багш",
    lesson1: "Монгол хэл",
    lesson2: "",
  },
];

export default function TableWithStripedRows() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    >
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">
              АШУҮИС-Анагаахын шинжлэх ухааны үндэсний их сургууль
            </p>
            <p className="text-gray-500">
              ЭЕШ-ын хоёр хичээлийн оноог хооронд нь нэмэж, шалгуулагчдыг
              жагсаалтанд эрэмбэлнэ.
            </p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_ASHUS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_ASHUS.map(({ name, lesson1, lesson2 }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {lesson2}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>
            <p className="font-bold">МУБИС-Монгол улсын багшийн их сургууль</p>
            <p className="text-gray-500">/Эх сурвалж: YOLO.MN 2016-11-04</p>
          </h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                {TABLE_HEAD_MUBIS.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="align-top break-words">
              {TABLE_ROWS_MUBIS.map(({ name, lesson1, lesson2 }, index) => (
                <tr
                  key={name}
                  className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4"
                >
                  <td className="text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal"
                    >
                      {lesson1}
                    </Typography>
                  </td>
                  <td className="p-4 text-center">
                    <Typography
                      as="a"
                      href="#"
                      variant="small"
                      color="blue-gray"
                      className="font-medium"
                    >
                      {lesson2}
                    </Typography>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
