import React from "react";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { Quicksand } from "next/font/google";
const quicksand = Quicksand({
  subsets: ["latin"],
  variable: "--font-quicksand",
});
const Dashboard = async () => {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
  }
  return (
    <main
      className={`${quicksand.variable}  font-quicksand max-w-[900px] w-full m-auto `}
    >
      <div className="flex min-h-screen flex-col items-center justify-between p-24">
        Dashboard
      </div>
    </main>
  );
};

export default Dashboard;
