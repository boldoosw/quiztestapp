import Link from "next/link";

export default function TopicNavbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-blue-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/profession"}>
        Таны сонгосон мэргэжил
      </Link>
      <Link className="bg-white p-2 rounded" href={"/profession/addTopic"}>
        Мэргэжил нэмэх
      </Link>
    </nav>
  );
}
