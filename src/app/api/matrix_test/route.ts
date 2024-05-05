import connectMongoDB from "@/utils/db";
import MatrixQuiz from "@/models/MatrixQuiz";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const { climov_items, holland_items, uid, email } = await request.json();
  await connectMongoDB();

  const existingMatrixQuiz = await MatrixQuiz.findOne({
    email: email,
  });
  if (existingMatrixQuiz) {
    await MatrixQuiz.findByIdAndDelete(existingMatrixQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await MatrixQuiz.create({
    climov_items,
    holland_items,
    uid,
    email,
  });
  return NextResponse.json({ message: "MatrixQuiz Created" }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { user_email: string } }
) {

  const by_email = request.nextUrl.searchParams.get("user_email");
  console.log("my search email:", by_email);
  await connectMongoDB();

  const existingMatrixQuiz = await MatrixQuiz.findOne({
    email: "boldoosw@gmail.com",
  });
  return NextResponse.json({ existingMatrixQuiz });
}

export async function DELETE(request:NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await MatrixQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "MatrixQuiz deleted" }, { status: 200 });
}
