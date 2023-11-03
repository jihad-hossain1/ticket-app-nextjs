import React from "react";
import { LuTrash2 } from "react-icons/lu";

const DeleteBlock = () => {
  return (
    <LuTrash2
      className="cursor-pointer text-red-500 hover:text-red-300"
      size={25}
    />
  );
};

export default DeleteBlock;
