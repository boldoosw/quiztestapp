import connectMongoDB from "@/utils/db";
import Profession from "@/models/profession";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, description } = await request.json();
  await connectMongoDB();
  await Profession.create({ title, description });
  return NextResponse.json({ message: "Profession Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const professions = await Profession.find();
  return NextResponse.json({ professions });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Profession.findByIdAndDelete(id);
  return NextResponse.json({ message: "Profession deleted" }, { status: 200 });
}
