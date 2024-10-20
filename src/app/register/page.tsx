"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Register = () => {
  const [error, setError] = useState("");
  const router = useRouter();
  const { data: session, status: sessionStatus } = useSession();
  const [role, setRole] = useState("");

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/");
    }
  }, [sessionStatus, router]);

  const isValidEmail = (email: string) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // return emailRegex.test(email);
    return true;
  };
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const lastname = e.target[0].value;
    const firstname = e.target[1].value;
    const phone = e.target[2].value;
    const email = e.target[3].value;
    const facebook = e.target[4].value;
    const password = e.target[5].value;

    console.log(role);

    if (role === "") {
      setError("Ангиа сонгоод бүртгүүлэх боломжтой!!!!");
      return;
    }
    if (lastname === "") {
      setError("Өөрийн  овог нэрээ оруулна уу!!!!");
      return;
    }
    if (firstname === "") {
      setError("Өөрийн сургууль ангиа оруулна уу!!!!");
      return;
    }
    if (phone === "") {
      setError("Утасны дугаараа оруулна уу!!!!");
      return;
    }
    if (!isValidEmail(email)) {
      setError("Имайл хаяг алдаатай байна !");
      return;
    }
    if (facebook === "") {
      setError("Фэйсбүүк хаягаа оруулна уу!!!!");
      return;
    }

    if (!password || password.length < 4) {
      setError("Нууц үг 4 тэмдэгтээс их байх ёстой!");
      return;
    }

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          lastname,
          firstname,
          phone,
          email,
          facebook,
          password,
          role,
        }),
      });
      if (res.status === 400) {
        setError("Имайл хаягаар өмнө нь бүртгүүлсэн байна!");
      }
      if (res.status === 200) {
        setError("");
        router.push("/login");
      }
    } catch (error) {
      setError("Алдаа гарлаа, дахин оролдоно уу!");
      console.log(error);
    }
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
      <div className="grid min-h-screen  place-items-center  p-24 ">
        <div className="w-80 rounded-lg border-t-4 border-green-400 bg-white p-5 shadow-lg">
          <h1 className="my-4 text-xl font-bold">Бүртгүүлэх</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              className="border-gray-300 mb-4 w-full rounded border px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Овог Нэр"
              required
            />
            <input
              type="text"
              className="border-gray-300 mb-4 w-full rounded border px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Сургууль анги"
              required
            />
            <input
              type="number"
              className="border-gray-300 mb-4 w-full rounded border px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Утасны дугаар"
              required
            />
            <input
              type="text"
              className="border-gray-300 mb-4 w-full rounded border px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Email"
              required
            />
            <input
              type="text"
              className="border-gray-300 mb-4 w-full rounded border px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Фэйсбүүк хаяг"
              required
            />
            <input
              type="password"
              className="border-gray-300 mb-4 w-full rounded border px-3 py-2 text-black focus:border-blue-400 focus:text-black focus:outline-none"
              placeholder="Нууц үг"
              required
            />
            <div className="mx-auto w-full max-w-2xl rounded-md border p-4">
              {/* <h4 className="text-xl lg:text-2xl font-semibold">Анги сонгох</h4> */}

              <div>
                <label className="bg-gray-100 text-gray-700 my-3 flex cursor-pointer rounded-md px-3  py-2 hover:bg-indigo-300 ">
                  <input
                    type="radio"
                    name="role"
                    value="angi8_9"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <i className="pl-2">8,9 дүгээр анги</i>
                  <i className="pl-2">хичээл сонголт</i>
                </label>

                <label className="bg-gray-100 text-gray-700 my-3 flex cursor-pointer rounded-md px-3  py-2 hover:bg-indigo-300 ">
                  <input
                    type="radio"
                    name="role"
                    value="angi10_12"
                    onChange={(e) => setRole(e.target.value)}
                  />
                  <i className="pl-2">10,11,12 дугаар анги </i>
                  <i className="pl-2">мэргэжил сонголт</i>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 w-full rounded bg-blue-500 py-2 text-white hover:bg-blue-600"
            >
              {" "}
              Бүртгүүлэх
            </button>
            <p className="text-red-600 mb-4 text-[16px]">{error && error}</p>
          </form>
          <div className="text-gray-500 mt-4 text-center">- эсвэл -</div>
          <Link
            className="mt-2 block text-center text-blue-500 hover:underline"
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
