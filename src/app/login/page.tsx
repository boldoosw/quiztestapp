"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
const Login = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  // const session = useSession();
  const { data: session, status: sessionStatus } = useSession();

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
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

    if (!isValidEmail(email)) {
      setError("Email is invalid");
      return;
    }

    if (!password || password.length < 8) {
      setError("Password is invalid");
      return;
    }

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError("Invalid email or password");
      if (res?.url) router.replace("/dashboard_one");
    } else {
      setError("");
    }
  };

  if (sessionStatus === "loading") {
    return <h1>Ачааллаж байна...</h1>;
  }

  return (
    sessionStatus !== "authenticated" && (
      // <div className="flex min-h-screen flex-col items-center justify-between p-24">
      //   <div className="bg-[#212121] p-8 rounded shadow-md w-80">
      //     <h1 className="text-2xl text-gray-200 text-center  mb-8">Нэвтрэх</h1>
      <div className="grid min-h-screen  place-items-center  p-24 ">
        <div className="w-80 rounded-lg border-t-4 border-green-400 bg-white p-5 shadow-lg">
          <h1 className="text-xl font-bold my-4">Нэвтрэх</h1>
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
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            >
              {" "}
              Нэвтрэх
            </button>
            <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
          </form>

          {/* <GoogleButton
            className="mx-auto mt-2 mb-4"
            onClick={() => {
              signIn("google");
            }}
          /> */}
          {/* <button
            className="w-full bg-black text-white py-2 rounded hover:bg-gray-800"
            onClick={() => {
              signIn("github");
            }}
          >
            Sign In with Github
          </button> */}
          <div className="text-center text-gray-500 mt-4">- эсвэл -</div>
          <Link
            className="block text-center text-blue-500 hover:underline mt-2"
            href="/register"
          >
            Бүртгүүлэх
          </Link>
        </div>
      </div>
    )
  );
};

export default Login;
