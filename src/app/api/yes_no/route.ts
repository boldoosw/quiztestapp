import connectMongoDB from "@/utils/db";
import YesNo from "@/models/YesNo";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { a_items, b_items, c_items,uid, email } = await request.json();
  await connectMongoDB();
  const existingYesNo = await YesNo.findOne({
    email:email,
  });
  if (existingYesNo) {
    await YesNo.findByIdAndDelete(existingYesNo._id);
  }
  await YesNo.create({
    a_items,
    b_items,
    c_items,
    uid,
    email,
  });
  return NextResponse.json({ message: "YesNo Created" }, { status: 201 });
}

export async function GET(
  request: NextRequest,
  { params }: { params: { user_email: string } }
) {
  // const { searchParams } = new URL(request.url);
  const by_email = request.nextUrl.searchParams.get("user_email");
  console.log("my search email:", by_email);

  await connectMongoDB();

  const existingYesNo = await YesNo.findOne({
    email: by_email,
  });
  return NextResponse.json({ existingYesNo });
}

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await YesNo.findByIdAndDelete(id);
  return NextResponse.json({ message: "YesNo deleted" }, { status: 200 });
}
