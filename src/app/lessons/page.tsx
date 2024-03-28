import React from "react";
import { Quicksand } from "next/font/google";
import LessonExample from "../../components/LessonExample";

const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
function LessonsPage() {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex flex-col">
        <LessonExample />
      </div>
    </main>
  );
}

export default LessonsPage;
