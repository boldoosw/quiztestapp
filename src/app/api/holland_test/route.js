import connectMongoDB from "@/utils/db";
import HollandQuiz from "@/models/HollandQuiz";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { hollandquiz_items, top_items, email } = await request.json();
  await connectMongoDB();
  console.log("hollandquiz_items arr:", hollandquiz_items);
  const existingHollandQuiz = await HollandQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  if (existingHollandQuiz) {
    await HollandQuiz.findByIdAndDelete(existingHollandQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await HollandQuiz.create({
    hollandquiz_items,
    top_items,
    email,
  });
  return NextResponse.json({ message: "HollandQuiz Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const existingHollandQuiz = await HollandQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  return NextResponse.json({ existingHollandQuiz });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await HollandQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "HollandQuiz deleted" }, { status: 200 });
}
