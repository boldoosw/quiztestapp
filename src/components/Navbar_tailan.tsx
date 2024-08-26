/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import logonew from "@/assets/images/logo_mcu.png";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";

import { signOut, useSession } from "next-auth/react";

export default function Navbar2() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  const { data: session }: any = useSession();
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  // if (!session) {
  //   navItems = session?.user?.role === "angi_8_9" ? navItems1 : navItems2;
  // }
  // navItems = navItems1;

  return (
    <div className="bg-white mx-auto flex  w-full max-w-7xl justify-between px-4 py-4 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-4">
        {/* logo */}
        <Link href="/">
          <Image className="w-12" src={logonew} alt=" logo" />
        </Link>
        <div className="uppercase font-bold font-mono text-lg text-neutral-400">
          Мэргэжил сонголтын онлайн тестийн тайлан
        </div>

        <div className="hidden md:flex items-center gap-4 transition-all"></div>
        {/* navitems */}
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all"></div>

        {/* <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <Link href="/login">
            <button className="h-fit text-neutral-400 transition-all hover:text-black/90">
              Нэвтрэх
            </button>
          </Link>
          <Link href="/register">
            <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
              Бүртгүүлэх
            </button>
          </Link>
        </section> */}
      </div>
    </div>
  );
}
