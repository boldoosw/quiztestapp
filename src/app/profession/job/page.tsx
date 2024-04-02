import AddTask from "@/components/AddTask";
import TodoList from "@/components/TodoList";
import React from "react";

const page = () => {
  const tasks = {
    tasks: [
      {
        id: "a0b06c2f-a82a-48a1-b5ec-fae1e4d13665",
        text: "learn next js ",
      },
      {
        id: "a9f357f4-8871-4a2f-84df-87a1371978bf",
        text: "go to school",
      },
      {
        id: "41d4efd0-7497-455f-bf8b-02d4f3026291",
        text: "go home1",
      },
    ],
  };
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      {/* <TodoList tasks={tasks.tasks} /> */}
    </main>
  );
};

export default page;
