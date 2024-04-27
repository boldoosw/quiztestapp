import connectMongoDB from "@/utils/db";
import YesNo from "@/models/YesNo";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { a_items, b_items, c_items, email } = await request.json();
  await connectMongoDB();
  const existingYesNo = await YesNo.findOne({
    email: "boldoosw@gmail.com",
  });
  if (existingYesNo) {
    await YesNo.findByIdAndDelete(existingYesNo._id);
  }
  await YesNo.create({
    a_items,
    b_items,
    c_items,
    email,
  });
  return NextResponse.json({ message: "YesNo Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();

  const existingYesNo = await YesNo.findOne({
    email: "boldoosw@gmail.com",
  });
  return NextResponse.json({ existingYesNo });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await YesNo.findByIdAndDelete(id);
  return NextResponse.json({ message: "YesNo deleted" }, { status: 200 });
}
