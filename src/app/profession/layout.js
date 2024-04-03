import TopicNav from "@/components/TopicNav";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
export default function RootLayout({ children }) {
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto flex flex-col items-center`}
    >
      <TopicNav />
      <div className="text-black text-center mt-8 w-full">{children}</div>
    </main>
  );
}
