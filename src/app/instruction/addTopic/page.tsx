"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Tiptap from "@/components/Tiptap";

export default function AddTopic() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [content, setContent] = useState("");
  // const [content, setContent] = useState<string>("");
  const handleContentChange = (reason: any) => {
    setContent(reason);
    setDescription(reason);
  };

  const router = useRouter();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const data = {
      title: title,
      content: content,
      description: description,
    };
    console.log(data);

    if (!title || !content) {
      alert("Title and description are required.");
      return;
    }
    const NEXT_PUBLIC_APP_API_ENDPOINT =
      process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
    try {
      const res = await fetch(`${NEXT_PUBLIC_APP_API_ENDPOINT}/api/topics`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({ title, description }),
      });

      if (res.ok) {
        router.push("/instruction");
      } else {
        throw new Error("Failed to create a topic");
      }
    } catch (error) {
      console.log(error);
    }

    // const existingDataString = localStorage.getItem("myData");
    // const existingData = existingDataString
    //   ? JSON.parse(existingDataString)
    //   : [];
    // const updatedData = [...existingData, data];
    // localStorage.setItem("myData", JSON.stringify(updatedData));
    setContent("");
  };
  // return (
  //   <form
  //     onSubmit={handleSubmit}
  //     className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
  //   >
  //     <div className="text-3xl text-center text-sky-300 mb-10">
  //       Notes Picker
  //     </div>
  //     <Tiptap
  //       content={content}
  //       onChange={(newContent: string) => handleContentChange(newContent)}
  //     />
  //   </form>
  // );
  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   if (!title || !description) {
  //     alert("Title and description are required.");
  //     return;
  //   }
  //   const NEXT_PUBLIC_APP_API_ENDPOINT =
  //     process.env.NEXT_PUBLIC_APP_API_ENDPOINT;
  //   try {
  //     const res = await fetch(`${NEXT_PUBLIC_APP_API_ENDPOINT}/api/topics`, {
  //       method: "POST",
  //       headers: {
  //         "Content-type": "application/json",
  //       },
  //       body: JSON.stringify({ title, description }),
  //     });

  //     if (res.ok) {
  //       router.push("/instruction");
  //     } else {
  //       throw new Error("Failed to create a topic");
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10"
    >
      <input
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        className="border border-slate-500 px-8 py-2"
        type="text"
        placeholder="Topic Title"
      />
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
}
