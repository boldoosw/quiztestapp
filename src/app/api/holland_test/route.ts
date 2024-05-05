import connectMongoDB from "@/utils/db";
import HollandQuiz from "@/models/HollandQuiz";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const { hollandquiz_items, top_items, uid, email } = await request.json();
  await connectMongoDB();
  console.log("hollandquiz_items arr:", hollandquiz_items);
  console.log("testees irj bui ogogdol uid:", uid);

  const existingHollandQuiz = await HollandQuiz.findOne({
    email: email,
  });
  if (existingHollandQuiz) {
    await HollandQuiz.findByIdAndDelete(existingHollandQuiz._id);
    // return new NextResponse("Email is already in use", { status: 400 });
  }
  await HollandQuiz.create({
    hollandquiz_items,
    top_items,
    uid,
    email,
  });
  return NextResponse.json({ message: "HollandQuiz Created" }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { user_email: string } }
) {
  const by_email = request.nextUrl.searchParams.get("user_email");
  console.log("my search email:", by_email);

  await connectMongoDB();

  const existingHollandQuiz = await HollandQuiz.findOne({
    email: by_email,
  });
  return NextResponse.json({ existingHollandQuiz });
}

export async function DELETE(request:NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await HollandQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "HollandQuiz deleted" }, { status: 200 });
}
