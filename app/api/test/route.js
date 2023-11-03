import connectMongoDB from "@/lib/mongodb";
import Ticket from "@/models/test";
// import Ticket from "@/models/ticket";
// import { Ticket } from "@/models/ticket";
import { NextResponse } from "next/server";

export async function POST(request) {
  console.log(request);
  try {
    const { title, description } = await request.json();
    await connectMongoDB();
    await Ticket.create({ title, description });
    return NextResponse.json({ message: "ticket Created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}

export async function GET() {
  await connectMongoDB();
  const tickets = await Ticket.find();
  return NextResponse.json({ tickets });
}
