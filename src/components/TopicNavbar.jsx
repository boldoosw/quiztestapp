import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-blue-400 px-8 py-3">
      <Link className="text-white font-bold" href={"/"}>
        Зөвлөмж зааварчилгааны хэсэг
      </Link>
      <Link className="bg-white p-2" href={"/instruction/addTopic"}>
        Зөвлөмж нэмэх
      </Link>
    </nav>
  );
}
