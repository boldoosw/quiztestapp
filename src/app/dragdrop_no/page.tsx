"use client";

import React, { useEffect } from "react";
import { Quicksand } from "next/font/google";
import DndExampleNo from "@/components/DndExampleNo";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

interface Item {
  id: number;
  name: string;
}
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function DragDropPage() {
  const router = useRouter();
  const { data: session }: any = useSession();
  let thirdItem1!: Item;
  let thirdItem2!: Item;
  let thirdItem3!: Item;

  async function handleSaveBtn() {
    thirdItem1 = JSON.parse(localStorage.getItem("thirdItem1")!);
    thirdItem2 = JSON.parse(localStorage.getItem("thirdItem2")!);
    thirdItem3 = JSON.parse(localStorage.getItem("thirdItem3")!);

    let a_items = "";
    let b_items = "";
    let c_items = [thirdItem1.id, thirdItem2.id, thirdItem3.id].toString();
    let email = session?.user.email;
    let uid = session?.user.id;

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
          uid: uid,
          email,
        }),
      });

      if (res.ok) {
        console.log("amjilttai hadgallaa");
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create a yes no");
      }
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    localStorage.clear;
  }, []);

  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex flex-col">
        {/* <Test /> */}
        <DndExampleNo />

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
