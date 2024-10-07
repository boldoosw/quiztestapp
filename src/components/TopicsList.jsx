import Link from "next/link";
import RemoveBtn from "./RemoveBtn";
import { HiPencilAlt } from "react-icons/hi";

const NEXT_PUBLIC_APP_API_ENDPOINT = process.env.NEXT_PUBLIC_APP_API_ENDPOINT;

const getTopics = async () => {
  try {
    // const res = await fetch(`${NEXT_PUBLIC_APP_API_ENDPOINT}/api/topics`, {
    //   cache: "no-store",
    // });

    const res = await fetch(`${NEXT_PUBLIC_APP_API_ENDPOINT}/api/topics`, {
      cache: "no-store",
    });

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
    <>
      {topics.map((t) => (
        <div
          key={t._id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="font-bold text-2xl">{t.title}</h2>

            <div
              className="ProseMirror whitespace-pre-line border border-slate-700 px-6 py-4 rounded-lg"
              style={{ whiteSpace: "pre-line" }}
              dangerouslySetInnerHTML={{ __html: t.description }}
            />
          </div>

          <div className="flex gap-2">
            <RemoveBtn id={t._id} />
            <Link href={`/instruction/editTopic/${t._id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
