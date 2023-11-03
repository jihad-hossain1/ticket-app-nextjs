import React from "react";
import DeleteBlock from "./DeleteBlock";
import PriortryDisplay from "./PriortryDisplay";
import ProgressDisplay from "./ProgressDisplay";
import StatusDisplay from "./StatusDisplay";
import Link from "next/link";

const TicketCard = ({ ticket }) => {
  const formatTimestamp = (timestam) => {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };
    const date = new Date(timestam);
    const formattedDate = date.toLocaleString("en-US", options);
    return formattedDate;
  };
  return (
    <div className="flex flex-col bg-card hover:bg-card-hover rounded-md shadow-lg p-3 m-2">
      <div className="flex mb-3">
        <PriortryDisplay priority={ticket?.priority} />
        <div className="ml-auto">
          <DeleteBlock id={ticket?._id} />
          <Link
            className="hover:underline text-sm font-semibold"
            href={`/TicketPage/${ticket?._id}`}
            style={{ display: "contents" }}
          >
            Edit
          </Link>
        </div>
      </div>
      <h4>{ticket?.title}</h4>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">{ticket?.description}</p>
      <div className="flex mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">{formatTimestamp(ticket?.createdAt)}</p>
          <ProgressDisplay progress={ticket?.progress} />
        </div>
        <div className="ml-auto flex items-end">
          <StatusDisplay status={ticket?.status} />
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
