import connectMongoDB from "@/utils/db";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { user_email: string } }
) {
  const by_email = request.nextUrl.searchParams.get("user_email");

  await connectMongoDB();

  const existinguser = await User.findOne({
    email: by_email,
  });
  return NextResponse.json({ existinguser });
}
