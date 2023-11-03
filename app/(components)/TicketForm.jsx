"use client";

import { useState } from "react";

const TicketForm = () => {
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    categroy: "Hardware Problem",
    status: "not started",
  };

  const [formData, setFormData] = useState(startingTicketData);

  console.log(formData);
  return (
    <div className="flex justify-center mt-16">
      <form>
        <h3 className="my-6">Create Your Ticket</h3>
        <div className="grid mb-4 w-full">
          <label htmlFor="">Title</label>

          <input
            className=""
            type="text"
            id="title"
            name="title"
            required={true}
            value={formData.title}
            onChange={handleChange}
          />
        </div>
        <input type="submit" value="create" className="btn" />
      </form>
    </div>
  );
};

export default TicketForm;
