"use client";

import React, { useEffect } from "react";
import { Quicksand } from "next/font/google";
import DndExampleNo from "@/components/DndExampleNo";

interface Item {
  id: number;
  name: string;
}
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function DragDropPage() {
  let firstItem3!: Item;
  let secondItem3!: Item;
  let thirdItem3!: Item;

  if (typeof window !== "undefined" && window.localStorage) {
    firstItem3 = JSON.parse(localStorage.getItem("firstItem3")!);
    secondItem3 = JSON.parse(localStorage.getItem("secondItem3")!);
    thirdItem3 = JSON.parse(localStorage.getItem("thirdItem3")!);
  }
  async function handleSaveBtn() {
    let a_items = "";
    let b_items = "";
    let c_items = [firstItem3.id, secondItem3.id, thirdItem3.id].toString();
    let email = "boldoosw@gmail.com";

    console.log("c items:", c_items);

    try {
      const res = await fetch("/api/yes_no", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          a_items,
          b_items,
          c_items,
          email,
        }),
      });

      if (res.ok) {
        console.log("amjilttai hadgallaa");
        //  router.refresh();
        //  router.push("/dashboard_one");
      } else {
        throw new Error("Failed to create a yes no");
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex flex-col">
        {/* <Test /> */}
        <DndExampleNo />
        {firstItem3?.id}
        {firstItem3?.name}
        <br />
        {secondItem3?.id}
        {secondItem3?.name}
        <br />
        {thirdItem3?.id}
        {thirdItem3?.name}

        {/* {second}
        {last} */}
        <div>
          {" "}
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={handleSaveBtn}
          >
            Хадгалах
          </button>
        </div>
      </div>
    </main>
  );
}

export default DragDropPage;
