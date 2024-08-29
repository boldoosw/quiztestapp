import connectMongoDB from "@/utils/db";
import ClimovQuiz from "@/models/ClimovQuiz";
import MatrixQuiz from "@/models/MatrixQuiz";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
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

  const existingMatrixQuiz = await MatrixQuiz.findOne({
    email: email,
  });

  if (existingMatrixQuiz) {
    // await MatrixQuiz.findByIdAndDelete(existingMatrixQuiz._id);
    await MatrixQuiz.findByIdAndUpdate(existingMatrixQuiz._id, {
      climov_items: climovquiz_items,
    });
    // return new NextResponse("Email is already in use", { status: 400 });
  } else {
    await MatrixQuiz.create({
      climov_items: climovquiz_items,
      holland_items: "",
      uid,
      email,
    });
  }
  return NextResponse.json(
    { message: "Климовын тестийг амжилттай бөглөлөө." },
    { status: 201 }
  );
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

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await ClimovQuiz.findByIdAndDelete(id);
  return NextResponse.json({ message: "ClimovQuiz deleted" }, { status: 200 });
}
