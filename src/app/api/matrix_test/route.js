import connectMongoDB from "@/utils/db";
import MatrixQuiz from "@/models/MatrixQuiz";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { climov_items, holland_items, email } = await request.json();
  await connectMongoDB();

  const existingMatrixQuiz = await MatrixQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  if (existingMatrixQuiz) {
    await MatrixQuiz.findByIdAndDelete(existingMatrixQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await MatrixQuiz.create({
    climov_items,
    holland_items,
    email,
  });
  return NextResponse.json({ message: "MatrixQuiz Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const existingMatrixQuiz = await MatrixQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  return NextResponse.json({ existingMatrixQuiz });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await MatrixQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "MatrixQuiz deleted" }, { status: 200 });
}
