import User from "@/models/User";
import connectMongoDB from "@/utils/db";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const {lastname,firstname ,phone, email, password,role } = await request.json();

  await connectMongoDB();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("Email is already in use", { status: 400 });
  }
  const salt = await bcrypt.genSalt(5);
  const hashedPassword = await bcrypt.hash(password, salt);
  const newUser = new User({
    lastname,
    firstname,
    phone,
    email,
    password: hashedPassword,
    role,
    topic_id:""
  });

  try {
    await newUser.save();
    return new NextResponse("user is registered", { status: 200 });
  } catch (err: any) {
    return new NextResponse(err, {
      status: 500,
    });
  }
};
