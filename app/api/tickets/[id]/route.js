import Ticket from '@/app/(models)/Ticket'
import { NextResponse } from 'next/server';

export async function DELETE(req,{params}) {
  // console.log(req);
  try {
      const { id } = params;
      await Ticket.findByIdAndDelete(id)
    return NextResponse.json({ message: 'ticket deleted' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "not delete some err:", error }, { status: 500 });
  }
}

//find a single ticket
export async function GET(req,{params}) {
  // console.log(req);
  try {
      const { id } = params;
      const foundTicket = await Ticket.findOne({_id: id})
    return NextResponse.json({ foundTicket }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "not found ticket some err:", error }, { status: 500 });
  }
}


//find a single ticket
export async function PUT(req,{params}) {
  // console.log(req);
  try {
    const { id } = params;
    const body = await req.json();
    const ticketDAta = body.formData;

    const updateTicketDAta = await Ticket.findByIdAndUpdate(id, {
      ...ticketDAta
    })
      
    return NextResponse.json({ message: 'ticket updated' }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "not update some err:", error }, { status: 500 });
  }
}