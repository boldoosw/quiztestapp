import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch(
      "https://quiz-app-peach-theta.vercel.app/api/topics",
      {
        // const res = await fetch("https://quiztestapp.vercel.app/api/topics", {
        cache: "no-store",
      },
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topics");
    }

    return res.json();
  } catch (error) {
    console.log("Error loading topics: ", error);
  }
};

export default async function TopicsList() {
  const { topics } = await getTopics();

  return (
    <div>
      {topics.map((t) => (
        <div
          key={t._id}
          className="my-3 flex items-start justify-between gap-5 border border-slate-300 p-4 "
        >
          <div>
            <h2 className="text-2xl font-bold">{t.title}</h2>
            <div>{t.description}</div>
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/profession/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
