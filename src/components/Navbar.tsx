"use client";
import React from "react";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";

import Image from "next/image";
import logonew from "@/assets/images/logo_mcu.png";

const Navbar = () => {
  const { data: session }: any = useSession();

  return (
    <div className="bg-white mx-auto flex  w-full max-w-7xl justify-between px-4  text-sm">
      <section className="flex items-center gap-10">
        <Link href="/">
          <Image className="w-12" src={logonew} alt=" logo" />
        </Link>
        <div className="uppercase font-bold font-mono text-lg text-neutral-400">
          Мэргэжил сонголтын онлайн тест
        </div>
        <div className="hidden md:flex items-center gap-4 transition-all">
          <ul className="flex justify-between m-10 item-center gap-4">
            <div>
              <Link href="/">
                <li>Home</li>
              </Link>
            </div>
            <div className="flex gap-10">
              <Link href="/dashboard">
                <li>Dashboard</li>
              </Link>
              {!session ? (
                <>
                  <Link href="/login">
                    <li>Login</li>
                  </Link>
                  <Link href="/register">
                    <li>Register</li>
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
                      Logout
                    </button>
                  </li>
                </>
              )}
            </div>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
