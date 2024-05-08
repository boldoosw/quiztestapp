"use client";

import { cardsData } from "@/bin/CardsDataNo";
import { useEffect, useState } from "react";
import { Draggable, DropResult, Droppable } from "react-beautiful-dnd";
import LoadingSkeleton from "./LoadingSkeleton";
import { DndContext } from "@/context/DndContext";
interface Cards {
  id: number;
  title: string;
  components: {
    id: number;
    name: string;
    bg: string;
    title: string;
    content: string;
  }[];
}
const DndExample = () => {
  const bColor = [
    "bg-green-300",
    "bg-blue-300",
    "bg-yellow-300",
    "bg-gray-400",
    "bg-orange-400",
  ];
  const [data, setData] = useState<Cards[] | []>([]);
  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    if (source.droppableId !== destination.droppableId) {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const oldDroppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const newDroppableIndex = newData.findIndex(
        (x) => x.id == destination.droppableId.split("droppable")[1]
      );
      const [item] = newData[oldDroppableIndex].components.splice(
        source.index,
        1
      );
      newData[newDroppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
    } else {
      const newData = [...JSON.parse(JSON.stringify(data))]; //shallow copy concept
      const droppableIndex = newData.findIndex(
        (x) => x.id == source.droppableId.split("droppable")[1]
      );
      const [item] = newData[droppableIndex].components.splice(source.index, 1);
      newData[droppableIndex].components.splice(destination.index, 0, item);
      setData([...newData]);
      localStorage.setItem(
        "firstItem3",
        JSON.stringify({
          id: newData[0].components[0].id,
          name: newData[0].components[0].name,
        })
      );
      localStorage.setItem(
        "secondItem3",
        JSON.stringify({
          id: newData[0].components[1].id,
          name: newData[0].components[1].name,
        })
      );
      localStorage.setItem(
        "thirdItem3",
        JSON.stringify({
          id: newData[0].components[2].id,
          name: newData[0].components[2].name,
        })
      );
    }
  };
  useEffect(() => {
    setData(cardsData);
  }, []);
  if (!data.length) {
    return <LoadingSkeleton />;
  }
  return (
    <DndContext onDragEnd={onDragEnd}>
      {/* <h1 className="text-center mt-8 mb-3 font-bold text-[25px] ">
        Drag and Drop Application
      </h1> */}
      <div className="max-w-[800px] w-full m-auto justify-between my-5 mx-4 flex-col lg:flex-row">
        {data.map((val, index) => {
          function getContent(index: number) {
            return val.components[index].content;
            //  console.log(val.components[index].content);
          }
          function getTitle(index: number) {
            return val.components[index].title;
            //  console.log(val.components[index].content);
          }

          return (
            <Droppable
              key={`droppable${index}`}
              droppableId={`droppable${index}`}
            >
              {(provided) => (
                <div
                  className="p-5 w-full bg-white  border-gray-400 border border-dashed"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  <h1>Та яагаад мэргэжлээ сонгоогүй байгаа вэ?</h1>
                  <h5 className="text-red-500 text-sm">
                    Доорх хариултуудыг ач холбогдлоор нь дэс дугаарлана уу.
                  </h5>
                  {val.components?.map((component, index) => (
                    <Draggable
                      key={component.id}
                      draggableId={component.id.toString()}
                      index={index}
                    >
                      {(provided) => (
                        <div className="flex flex-row ">
                          <div
                            className={`mx-1 px-1 py-1 my-1  ${bColor[index]}`}
                          >
                            {index + 1}
                          </div>
                          <div
                            className={`mx-1 px-1 py-1 my-1 w-full min-width: 300px border-radius: 5px;  ${bColor[index]}`}
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                          >
                            {component.name}
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DndContext>
  );
};

export default DndExample;
