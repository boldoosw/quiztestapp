import connectMongoDB from "@/utils/db";
import Topic from "@/models/topic";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  params: { role: string; topic_id: string }
) {
  const by_topic = request.nextUrl.searchParams.get("topic_id");
  const role = request.nextUrl.searchParams.get("role");

  // const by_topic = params.topic_id;
  // const role = params.role;

  // console.log("routed irsen role:", role);
  // console.log("routed irsen topic_id:", by_topic);

  await connectMongoDB();

  let existingTopic;

  let existingTopic1 = await Topic.findOne({
    _id: "671502618887264dc494c9e3",
  });
  let existingTopic2 = await Topic.findOne({
    _id: "6715063d4876372365b07464",
  });
  // if (by_topic === "") {
  if (role === "angi8_9") existingTopic = existingTopic1;
  if (role === "angi10_12") existingTopic = existingTopic2;
  // }
  // if (by_topic === "")
  //   existingTopic = await Topic.findOne({
  //     _id: "662270d35f7a4dc2efab6ae7",
  //   });

  // const existingTopic = await Topic.find().sort({ _id: 1 }).limit(1);

  // find().sort({ _id: 1 }).limit(1);

  return NextResponse.json({ existingTopic });
}
