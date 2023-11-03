import TicketForm from "@/app/(components)/TicketForm";

const getTicketById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("failed to get ticket");
    }
  } catch (error) {
    console.log(error);
  }
};

const TicketPageId = async ({ params }) => {
  const EditMode = params.id === "new" ? false : true;
  let updateTicketData = {};
  if (EditMode) {
    updateTicketData = await getTicketById(params.id);
    updateTicketData = updateTicketData.foundTicket;
    console.log(updateTicketData);
  } else {
    updateTicketData = {
      _id: "new",
    };
  }
  return (
    <div>
      <TicketForm ticket={updateTicketData} />
    </div>
  );
};

export default TicketPageId;
