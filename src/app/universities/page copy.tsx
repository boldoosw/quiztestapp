"use client";
import { Card, Typography } from "@material-tailwind/react";
import { Quicksand } from "next/font/google";

import "@/app/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Мэргэжил сонголтын тест",
  description: "Мэргэжил сонголтын тест!",
};

const TABLE_HEAD = ["Name", "Job", "Employed", ""];

const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

export default function TableWithStripedRows() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    >
      <div className="w-full bg-white mb-6 shadow-lg rounded">
        <div className="w-full p-4">
          <h3>Ordenes de Servicio por completar</h3>
        </div>
        <div className="max-w-full">
          <table className="w-full table-fixed border-collapse">
            <thead className="text-left">
              <tr className="[&>*]:px-6 [&>*]:bg-gray-100 [&>*]:text-gray-500 [&>*]:border [&>*]:border-solid [&>*]:border-gray-200 [&>*]:py-3 [&>*]:text-xs [&>*]:uppercase [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:whitespace-no-wrap [&>*]:font-semibold [&>*]:text-center">
                <th className="w-24">folio</th>
                <th className="w-16">planta</th>
                <th className="w-32">cliente</th>
                <th className="w-32"></th>
              </tr>
            </thead>
            <tbody className="align-top break-words">
              <tr className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4">
                <td>XXXXXXX</td>
                <td>XXXXX</td>
                <td>XXXXX XXXXXX XXXX XX XXXX </td>
                <td>
                  <button className="text-white text-md bg-green-600 hover:bg-green-700 rounded-lg py-2 px-4 cursor-pointer font-semibold">
                    Completar
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4">
                <td>XXXXXXX</td>
                <td>XXXXX</td>
                <td>XXXXX XXXXXX XXXX XX XXXX </td>
                <td>
                  <button className="text-white text-md bg-green-600 hover:bg-green-700 rounded-lg py-2 px-4 cursor-pointer font-semibold">
                    Completar
                  </button>
                </td>
              </tr>
              <tr className="hover:bg-gray-200 [&>*]:border-t-0 [&>*]:px-6 [&>*]:align-middle [&>*]:border-l-0 [&>*]:border-r-0 [&>*]:text-xs [&>*]:whitespace-no-wrap [&>*]:p-4">
                <td>XXXXXXX</td>
                <td>XXXXX</td>
                <td>XXXXX XXXXXX XXXX XX XXXX </td>
                <td>
                  <button className="text-white text-md bg-green-600 hover:bg-green-700 rounded-lg py-2 px-4 cursor-pointer font-semibold">
                    Completar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
