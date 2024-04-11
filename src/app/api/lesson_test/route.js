import connectMongoDB from "@/utils/db";
import Lesson from "@/models/Lesson";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { checkbox_items, email } = await request.json();
  await connectMongoDB();
  const existingLesson = await Lesson.findOne({ email: "boldoosw@gmail.com" });
  if (existingLesson) {
    await Lesson.findByIdAndDelete(existingLesson._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await Lesson.create({ checkbox_items, email });
  return NextResponse.json({ message: "Lesson Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const existingLesson = await Lesson.findOne({ email: "boldoosw@gmail.com" });
  return NextResponse.json({ existingLesson });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Lesson.findByIdAndDelete(id);
  return NextResponse.json({ message: "Lesson deleted" }, { status: 200 });
}
