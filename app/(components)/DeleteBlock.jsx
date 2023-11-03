"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { LuTrash2 } from "react-icons/lu";

const DeleteBlock = ({ id }) => {
  const router = useRouter();
  const deleteTicket = async (idT) => {
    const res = await fetch(`http://localhost:3000/api/tickets/${idT}`, {
      method: "DELETE",
    });
    if (res.ok) {
      router.refresh();
    }
  };
  return (
    <LuTrash2
      onClick={() => deleteTicket(id)}
      className="cursor-pointer text-red-500 hover:text-red-300"
      size={25}
    />
  );
};

export default DeleteBlock;
