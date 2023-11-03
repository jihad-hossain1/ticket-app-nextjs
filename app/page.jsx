import React from "react";
import TicketCard from "./(components)/TicketCard";

const getTickets = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/tickets", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("failed to get tickets", error);
  }
};

const Dashboard = async () => {
  const { tickets } = await getTickets();
  console.log(tickets);

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  return (
    <div className="p-5">
      <div>
        {tickets &&
          uniqueCategories?.map((uniquecategory, categoryIndex) => (
            <div className="mb-4" key={categoryIndex}>
              <h4>{uniquecategory}</h4>
              <div className="lg:grid grid-cols-2 xl:grid-cols-4">
                {tickets
                  ?.filter((ticket) => ticket.category === uniquecategory)
                  .map((filteredTicket, _index) => (
                    <TicketCard key={_index} ticket={filteredTicket} />
                  ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
