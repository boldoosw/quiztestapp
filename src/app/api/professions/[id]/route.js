import connectMongoDB from "@/utils/db";
import Profession from "@/models/profession";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Profession.findByIdAndUpdate(id, { title, description });
  return NextResponse.json({ message: "Profession updated" }, { status: 200 });
}

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const profession = await Profession.findOne({ _id: id });
  return NextResponse.json({ profession }, { status: 200 });
}
