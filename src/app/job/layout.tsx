import Image from "next/image";
import { Quicksand } from "next/font/google";
// Logo
import header from "@/assets/images/choose-header.png";
// import Logo from "@/assets/react-quiz-logo.svg";
import "@/app/globals.css";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});

export const metadata = {
  title: "Мэргэжил сонголтын тест",
  description: "Мэргэжил сонголтын тест!",
};

export default function QuizLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <main
      className={`${quicksand.variable} bg-white  font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    >
      <Image className=" sm:h-full" src={header} alt="logo" />
      {children}
    </main>
  );
}
