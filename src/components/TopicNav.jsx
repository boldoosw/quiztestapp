import Link from "next/link";

export default function TopicNavbar() {
  return (
    <nav className="w-full flex justify-between items-center bg-blue-600 px-8 py-3">
      <Link className="text-white font-bold" href={"/profession/test"}>
        Таны сонгосон мэргэжил
      </Link>
      <Link className="bg-white p-2 rounded" href={"/profession/test/addTopic"}>
        Мэргэжил нэмэх
      </Link>
    </nav>
  );
}
