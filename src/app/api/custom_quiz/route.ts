import connectMongoDB from "@/utils/db";
import CustomQuiz from "@/models/CustomQuiz";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { customquiz_items, uid, email } = await request.json();
  await connectMongoDB();
  console.log("customquiz_items arr:", customquiz_items);
  const existingCustomQuiz = await CustomQuiz.findOne({
    email: email,
  });
  if (existingCustomQuiz) {
    await CustomQuiz.findByIdAndDelete(existingCustomQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await CustomQuiz.create({
    customquiz_items,
    uid,
    email,
  });
  return NextResponse.json({ message: "CustomQuiz Created" }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { user_email: string } }
) {
  const by_email = request.nextUrl.searchParams.get("user_email");
  // console.log("my search email custom quiz:", by_email);
  await connectMongoDB();

  const existingCustomQuiz = await CustomQuiz.findOne({
    email: by_email,
  });
  return NextResponse.json({ existingCustomQuiz });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await CustomQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "CustomQuiz deleted" }, { status: 200 });
}
