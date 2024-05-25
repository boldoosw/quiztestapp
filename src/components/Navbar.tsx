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

type NavItem = {
  label: string;
  link?: string;
  children?: NavItem[];
  iconImage?: string;
};

let navItems: NavItem[] = [
  // {
  //   label: "Тестүүд",
  //   link: "#",
  //   children: [
  //     {
  //       label: "Климов Тест",
  //       link: "/climov_test",
  //     },
  //     {
  //       label: "Холланд тест",
  //       link: "/holland_test",
  //     },
  //     {
  //       label: "Үр дүнгийн матриц",
  //       link: "/matrix_test",
  //     },
  //     {
  //       label: "MBTI тест",
  //       link: "/custom_test",
  //     },
  //     {
  //       label: "Асуулга",
  //       link: "/job",
  //     },
  //   ],
  // },
  // {
  //   label: "Хичээл сонголт",
  //   link: "/lessons",
  // },
  // {
  //   label: "Мэргэжил сонголт",
  //   link: "/profession",
  // },
  // {
  //   label: "Тайлан",
  //   link: "#",
  //   children: [
  //     {
  //       label: "Тайлан 8-9р анги",
  //       link: "/dashboard_one",
  //     },
  //     {
  //       label: "Тайлан 10,11,12 анги",
  //       link: "/dashboard_two",
  //     },
  //   ],
  // },
];

const navItems1: NavItem[] = [
  {
    label: "Асуулга",
    link: "#",
    children: [
      {
        label: "Түргэн тандалт",
        link: "/job",
      },
    ],
  },
  {
    label: "Тест",
    link: "#",
    children: [
      {
        label: "Хичээл сонголтын тест",
        link: "/custom_test",
      },
    ],
  },
  {
    label: "Мэргэжил",
    link: "#",
    children: [
      {
        label: "Мэргэжлийн чиг баримжаа",
        link: "/lessons",
      },
    ],
  },
  {
    label: "Бусад",
    link: "#",
    children: [
      {
        label: "ЭЕШ,ИДС",
        link: "/universities",
      },
      {
        label: "Мэргэжил Танилцуулга",
        link: "/professions",
      },
      {
        label: "Мэдээ Мэдээлэл",
        link: "#",
      },
    ],
  },
];
const navItems2: NavItem[] = [
  {
    label: "Асуулга",
    link: "#",
    children: [
      {
        label: "Түргэн тандалт",
        link: "/job",
      },
    ],
  },
  {
    label: "Тестүүд",
    link: "#",
    children: [
      {
        label: "Климовын тест",
        link: "/climov_test",
      },
      {
        label: "Холландын тест",
        link: "/holland_test",
      },
    ],
  },

  {
    label: "Бусад",
    link: "#",
    children: [
      {
        label: "ЭЕШ,ИДС",
        link: "/universities",
      },
      {
        label: "Мэргэжил Танилцуулга",
        link: "/professions",
      },
      {
        label: "Мэдээ Мэдээлэл",
        link: "#",
      },
    ],
  },
];
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
          Мэргэжил сонголтын онлайн тест
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          {!session ? (
            <>
              <Link
                href="/login"
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black ">
                  <span>Нэвтрэх</span>
                </p>
              </Link>
              <Link
                href="/register"
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black ">
                  <span>Бүртгүүлэх</span>
                </p>
              </Link>
            </>
          ) : (
            <>
              {(navItems =
                session?.user?.role === "angi_8_9"
                  ? navItems1
                  : session?.user?.role === "angi10_12"
                  ? navItems2
                  : navItems)?.map((d, i) => (
                <Link
                  key={i}
                  href={d.link ?? "#"}
                  className="relative group  px-2 py-3 transition-all "
                >
                  <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
                    <span>{d.label}</span>
                    {d.children && (
                      <IoIosArrowDown className=" rotate-180  transition-all group-hover:rotate-0" />
                    )}
                  </p>

                  {/* dropdown */}
                  {d.children && (
                    <div className="absolute   right-0   top-10 hidden w-auto  flex-col gap-1   rounded-lg bg-white py-3 shadow-md  transition-all group-hover:flex ">
                      {d.children.map((ch, i) => (
                        <Link
                          key={i}
                          href={ch.link ?? "#"}
                          className=" flex cursor-pointer items-center  py-1 pl-6 pr-8  text-neutral-400 hover:text-black  "
                        >
                          {/* image */}
                          {ch.iconImage && (
                            <Image src={ch.iconImage} alt="item-icon" />
                          )}
                          {/* item */}
                          <span className="whitespace-nowrap   pl-3 ">
                            {ch.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
              <p className="flex cursor-pointer items-center gap-2 text-neutral-300 group-hover:text-black ">
                {session.user?.email}
              </p>
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Гарах
                </button>
              </li>
            </>
          )}
        </div>
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
  const { data: session }: any = useSession();
  return (
    <div className="fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className=" h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          {navItems.map((d, i) => (
            <SingleNavItem
              key={i}
              label={d.label}
              iconImage={d.iconImage}
              link={d.link}
            >
              {d.children}
            </SingleNavItem>
          ))}
          {!session ? (
            <>
              <Link
                href="/login"
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black ">
                  <span>Нэвтрэх</span>
                </p>
              </Link>
              <Link
                href="/register"
                className="relative group  px-2 py-3 transition-all "
              >
                <p className="flex cursor-pointer items-center gap-2 text-neutral-900 group-hover:text-black ">
                  <span>Бүртгүүлэх</span>
                </p>
              </Link>
            </>
          ) : (
            <>
              {session.user?.email}
              <li>
                <button
                  onClick={() => {
                    signOut();
                  }}
                  className="p-2 px-5 -mt-1 bg-blue-800 rounded-full"
                >
                  Гарах
                </button>
              </li>
            </>
          )}
        </div>

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

function SingleNavItem(d: NavItem) {
  const [animationParent] = useAutoAnimate();
  const [isItemOpen, setItem] = useState(false);

  function toggleItem() {
    return setItem(!isItemOpen);
  }

  return (
    <Link
      ref={animationParent}
      onClick={toggleItem}
      href={d.link ?? "#"}
      className="relative   px-2 py-3 transition-all "
    >
      <p className="flex cursor-pointer items-center gap-2 text-neutral-400 group-hover:text-black ">
        <span>{d.label}</span>
        {d.children && (
          // rotate-180
          <IoIosArrowDown
            className={`text-xs transition-all  ${isItemOpen && " rotate-180"}`}
          />
        )}
      </p>

      {/* dropdown */}
      {isItemOpen && d.children && (
        <div className="  w-auto  flex-col gap-1   rounded-lg bg-white py-3   transition-all flex ">
          {d.children.map((ch, i) => (
            <Link
              key={i}
              href={ch.link ?? "#"}
              className=" flex cursor-pointer items-center  py-1 pl-6 pr-8 text-neutral-400 hover:text-black  "
            >
              {/* image */}
              {ch.iconImage && <Image src={ch.iconImage} alt="item-icon" />}
              {/* item */}
              <span className="whitespace-nowrap   pl-3 ">{ch.label}</span>
            </Link>
          ))}
        </div>
      )}
    </Link>
  );
}
