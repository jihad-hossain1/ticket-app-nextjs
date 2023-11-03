// import { Londrina_Sketch } from "next/font/google";
import Link from "next/link";
import React from "react";
import { FaTicketAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";

const Nav = () => {
  return (
    <nav className="flex justify-between bg-nav p-4">
      <div className="flex space-x-5">
        <Link href={"/"}>
          <AiFillHome className="icon" size={26} />
        </Link>
        <Link href={"/TicketPage/new"}>
          <FaTicketAlt className="icon" size={26} />
        </Link>
      </div>
      <div>
        <p className="text-default-text">jihad@gmail.com</p>
      </div>
    </nav>
  );
};

export default Nav;
