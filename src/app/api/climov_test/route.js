import connectMongoDB from "@/utils/db";
import ClimovQuiz from "@/models/ClimovQuiz";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { climovquiz_items, top_items, email } = await request.json();
  console.log("testees irj bui ogogdol top items:", top_items);
  await connectMongoDB();
  const existingClimovQuiz = await ClimovQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  if (existingClimovQuiz) {
    await ClimovQuiz.findByIdAndDelete(existingClimovQuiz._id);
  }
  await ClimovQuiz.create({
    climovquiz_items,
    top_items,
    email,
  });
  return NextResponse.json({ message: "ClimovQuiz Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const existingClimovQuiz = await ClimovQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  return NextResponse.json({ existingClimovQuiz });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ClimovQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "ClimovQuiz deleted" }, { status: 200 });
}
