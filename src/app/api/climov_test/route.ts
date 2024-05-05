import connectMongoDB from "@/utils/db";
import ClimovQuiz from "@/models/ClimovQuiz";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request:NextRequest) {
  const { climovquiz_items, top_items, uid, email } = await request.json();


  await connectMongoDB();
  const existingClimovQuiz = await ClimovQuiz.findOne({
    email: email,
  });
  if (existingClimovQuiz) {
    await ClimovQuiz.findByIdAndDelete(existingClimovQuiz._id);
  }
  await ClimovQuiz.create({
    climovquiz_items,
    top_items,
    uid,
    email,
  });
  return NextResponse.json({ message: "ClimovQuiz Created" }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { user_email: string } }
) {
  const by_email = request.nextUrl.searchParams.get("user_email");
  

  await connectMongoDB();

  const existingClimovQuiz = await ClimovQuiz.findOne({
    email: by_email,
  });
  return NextResponse.json({ existingClimovQuiz });
}

export async function DELETE(request:NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ClimovQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "ClimovQuiz deleted" }, { status: 200 });
}
