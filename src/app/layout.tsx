import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import AuthProvider from "./context/AuthProvider";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Мэргэжил сонголтын тест",
  description: "Мэргэжил сонголтын цахим тест",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <div className="container px-5 py-5 mx-auto flex justify-center flex-wrap bg-gray-100">
            {children}
          </div>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
