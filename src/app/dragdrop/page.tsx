"use client";
import DndExample from "@/components/DndExample";
import DndExample2 from "@/components/DndExample2";
import React, { useEffect } from "react";
import { Quicksand } from "next/font/google";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface Item {
  id: number;
  name: string;
}
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function DragDropPage() {
  const { data: session }: any = useSession();
  const router = useRouter();

  let firstItem1!: Item;
  let firstItem2!: Item;
  let firstItem3!: Item;

  let secondItem1!: Item;
  let secondItem2!: Item;
  let secondItem3!: Item;

  const handleSaveBtn = async () => {
    firstItem1 = JSON.parse(localStorage.getItem("firstItem1")!);
    firstItem2 = JSON.parse(localStorage.getItem("firstItem2")!);
    firstItem3 = JSON.parse(localStorage.getItem("firstItem3")!);

    secondItem1 = JSON.parse(localStorage.getItem("secondItem1")!);
    secondItem2 = JSON.parse(localStorage.getItem("secondItem2")!);
    secondItem3 = JSON.parse(localStorage.getItem("secondItem3")!);

    let a_items = [firstItem1.id, firstItem2.id, firstItem3.id].toString();
    let b_items = [secondItem1.id, secondItem2.id, secondItem3.id].toString();
    let c_items = "";
    let email = session?.user.email;
    let uid = session?.user.id;

    // console.log("a items:", a_items);
    // console.log("b items :", b_items);

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
        if (session?.user.role === "angi_8_9") router.push("/custom_test");
        if (session?.user.role === "angi10_12") router.push("/climov_test");
      } else {
        throw new Error("Failed to create a yes no");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    localStorage.clear();
  }, []);
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex flex-col">
        {/* <Test /> */}
        <DndExample />
        <DndExample2 />

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
