import connectMongoDB from "@/utils/db";
import CustomQuiz from "@/models/CustomQuiz";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { customquiz_items, email } = await request.json();
  await connectMongoDB();
  console.log("customquiz_items arr:", customquiz_items);
  const existingCustomQuiz = await CustomQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  if (existingCustomQuiz) {
    await CustomQuiz.findByIdAndDelete(existingCustomQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await CustomQuiz.create({
    customquiz_items,
    email,
  });
  return NextResponse.json({ message: "CustomQuiz Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const existingCustomQuiz = await CustomQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  return NextResponse.json({ existingCustomQuiz });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await CustomQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "CustomQuiz deleted" }, { status: 200 });
}
