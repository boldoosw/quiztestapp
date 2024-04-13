import connectMongoDB from "@/utils/db";
import ClimovQuiz from "@/models/ClimovQuiz";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { climovquiz_items, email } = await request.json();
  await connectMongoDB();
  console.log("climovquiz_items arr:", climovquiz_items);
  const existingClimovQuiz = await ClimovQuiz.findOne({
    email: "boexistingClimovQuizldoosw@gmail.com",
  });
  if (existingClimovQuiz) {
    await ClimovQuiz.findByIdAndDelete(existingClimovQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await ClimovQuiz.create({
    climovquiz_items,
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
