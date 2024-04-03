import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { getServerSession } from "next-auth";
import SessionProvider from "@/utils/SessionProvider";
import Footer from "../components/Footer";
import NewNavbar from "@/components/NewNavbar";
import Navbar2 from "@/components/Navbar2";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Мэргэжил сонголтын тест",
  description: "Мэргэжил сонголтын цахим тест",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <Suspense>
          <SessionProvider session={session}>
            <Navbar2 />
            <div className="container px-5 py-5 mx-auto flex justify-center flex-wrap bg-gray-100">
              {children}
            </div>
            <Footer />
          </SessionProvider>
        </Suspense>
      </body>
    </html>
  );
}
