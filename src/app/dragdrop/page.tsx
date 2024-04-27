"use client";
import DndExample from "@/components/DndExample";
import DndExample2 from "@/components/DndExample2";
import React, { useEffect } from "react";
import { Quicksand } from "next/font/google";

interface Item {
  id: number;
  name: string;
}
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function DragDropPage() {
  let firstItem1!: Item;
  let secondItem1!: Item;
  let thirdItem1!: Item;

  let firstItem2!: Item;
  let secondItem2!: Item;
  let thirdItem2!: Item;

  if (typeof window !== "undefined" && window.localStorage) {
    firstItem1 = JSON.parse(localStorage.getItem("firstItem1")!);
    secondItem1 = JSON.parse(localStorage.getItem("secondItem1")!);
    thirdItem1 = JSON.parse(localStorage.getItem("thirdItem1")!);

    firstItem2 = JSON.parse(localStorage.getItem("firstItem2")!);
    secondItem2 = JSON.parse(localStorage.getItem("secondItem2")!);
    thirdItem2 = JSON.parse(localStorage.getItem("thirdItem2")!);
  }
  const handleSaveBtn = async () => {
    let a_items = [firstItem1.id, secondItem1.id, thirdItem1.id].toString();
    let b_items = [firstItem2.id, secondItem2.id, thirdItem2.id].toString();
    let c_items = "";
    let email = "boldoosw@gmail.com";

    console.log("a items:", a_items);
    console.log("b items :", b_items);

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
  };

  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex flex-col">
        {/* <Test /> */}
        <DndExample />
        <DndExample2 />
        {firstItem1?.id}
        {firstItem1?.name}
        <br />
        {secondItem1?.id}
        {secondItem1?.name} <br />
        {thirdItem1?.id}
        {thirdItem1?.name} <br />
        {firstItem2?.id}
        {firstItem2?.name} <br />
        {secondItem2?.id}
        {secondItem2?.name} <br />
        {thirdItem2?.id}
        {thirdItem2?.name}
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
