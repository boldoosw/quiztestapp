import connectMongoDB from "@/utils/db";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: { topic_id: string } }
) {

  const by_topic = request.nextUrl.searchParams.get("topic_id");
  // console.log("my search topic :", by_topic);
  await connectMongoDB();

  const existingTopic = await Topic.findOne({
    _id:by_topic,
  });
  return NextResponse.json({ existingTopic });
}
