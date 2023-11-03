// import { Ticket } from "@/app/(models)/Ticket";
import Ticket from '@/app/(models)/Ticket'
import { NextResponse } from "next/server";

export async function POST(req) {
  // console.log(req);
  try {
    console.log('im am request data',req);
    const body = await req.json();
    const ticketData = body.modifyFormData;
    console.log('im from  modify data',ticketData);
    
    await Ticket.create(ticketData);
    console.log(object);
    return NextResponse.json({ message: "ticket created" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}

//get all ticket
export async function GET(req) {
  // console.log(req);
  try {
    const tickets = await Ticket.find();
    return NextResponse.json({ tickets }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "error", error }, { status: 500 });
  }
}
