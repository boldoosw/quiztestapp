"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [degree, setDegree] = useState("");

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    return emailRegex.test(email);
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    console.log(degree);

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    // try {
    //   const res = await fetch("/api/register", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       email,
    //       password,
    //     }),
    //   });
    //   if (res.status === 400) {
    //     setError("This email is already registered");
    //   }
    //   if (res.status === 200) {
    //     setError("");
    //     router.push("/login");
    //   }
    // } catch (error) {
    //   setError("Error, try again");
    //   console.log(error);
    // }
  };

  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      // <div className="flex min-h-screen flex-col items-center justify-between p-24">
      //   <div className="bg-[#212121] p-8 rounded shadow-md w-80">
      //     <h1 className="text-2xl text-gray-200 text-center  mb-8">
      //       Бүртгүүлэх
      //     </h1>
      <div className="grid place-items-center  min-h-screen  p-24 ">
        <div className="shadow-lg p-5 rounded-lg border-t-4 border-green-400 bg-white w-80">
          <h1 className="text-xl font-bold my-4">Бүртгүүлэх</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="w-full border border-gray-300 text-black rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400 focus:text-black"
              placeholder="Password"
              required
            />
            <div className="border rounded-md p-4 w-full mx-auto max-w-2xl">
              {/* <h4 className="text-xl lg:text-2xl font-semibold">Анги сонгох</h4> */}

              <div>
                <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input
                    type="radio"
                    name="degree"
                    value="1"
                    onChange={(e) => setDegree(e.target.value)}
                  />
                  <i className="pl-2">8,9 дүгээр анги</i>
                </label>

                <label className="flex bg-gray-100 text-gray-700 rounded-md px-3 py-2 my-3  hover:bg-indigo-300 cursor-pointer ">
                  <input
                    type="radio"
                    name="degree"
                    value="2"
                    onChange={(e) => setDegree(e.target.value)}
                  />
                  <i className="pl-2">10,11,12 дугаар анги</i>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white mt-4 py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Бүртгүүлэх
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>
          <div className="text-center text-gray-500 mt-4">- эсвэл -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/login"
          >
            Бүртгэлтэй хэрэглэгчээр нэвтрэх
          </Link>
        </div>
      </div>
    )
  );
};

export default Register;
