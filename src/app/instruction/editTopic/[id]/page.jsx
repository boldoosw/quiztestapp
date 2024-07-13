import EditTopicForm from "@/components/EditTopicForm";

const getTopicById = async (id) => {
  try {
    const { NEXT_PUBLIC_APP_API_ENDPOINT } = process.env;

    const res = await fetch(
      `${NEXT_PUBLIC_APP_API_ENDPOINT}/api/topics/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default async function EditTopic({ params }) {
  const { id } = params;
  const { topic } = await getTopicById(id);
  const { title, description } = topic;

  return <EditTopicForm id={id} title={title} description={description} />;
}
