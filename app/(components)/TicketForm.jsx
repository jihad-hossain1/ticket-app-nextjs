"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const TicketForm = ({ ticket }) => {
  const EditMode = ticket?._id === "new" ? false : true;
  const router = useRouter();
  //handle get input function
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (EditMode) {
      const res = await fetch(`/api/tickets/${ticket?._id}`, {
        method: "PUT",
        body: JSON.stringify({ formData }),
        "Content-type": "application/json",
      });
      if (!res.ok) {
        throw new Error("Ops! failed to update ticket.");
      }
    } else {
      const modifyFormData = {
        title: formData?.title,
        description: formData?.description,
        priority: parseFloat(formData?.priority),
        progress: parseFloat(formData?.progress),
        categroy: formData?.categroy,
        status: formData?.status,
      };

      if (modifyFormData) {
        console.log(modifyFormData);
        const res = await fetch(`/api/tickets`, {
          method: "POST",
          body: JSON.stringify({ modifyFormData }),
          headers: { "Content-type": "application/json" },
        });
        if (!res.ok) {
          throw new Error("Ops! failed to create ticket.");
        }
      }
    }

    router.refresh();
    router.push("/");
  };
  // scaffolding
  const startingTicketData = {
    title: "",
    description: "",
    priority: 1,
    progress: 0,
    categroy: "Hardware Problem",
    status: "not started",
  };

  if (EditMode) {
    startingTicketData["title"] = ticket.title;
    startingTicketData["description"] = ticket.description;
    startingTicketData["priority"] = ticket.priority;
    startingTicketData["progress"] = ticket.progress;
    startingTicketData["status"] = ticket.status;
    startingTicketData["category"] = ticket.category;
  }
  // form state
  const [formData, setFormData] = useState(startingTicketData);

  return (
    <div className="flex justify-center mt-16">
      <form
        method="post"
        onSubmit={handleSubmit}
        className="flex flex-col gap-3 w-1/2"
      >
        <h3 className="my-6">
          {EditMode ? "update your Ticket" : "Create Your Ticket"}
        </h3>

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

        <label htmlFor="">Description</label>

        <textarea
          className=""
          type="text"
          id="description"
          name="description"
          required={true}
          value={formData.description}
          onChange={handleChange}
        />

        <label htmlFor="">categroy</label>
        <select
          className="bg-card"
          name="categroy"
          value={formData.categroy}
          onChange={handleChange}
        >
          <option value="Hardware Problem">Hardware Problem</option>
          <option value="Software Problem">Software Problem</option>
          <option value="Project">Project</option>
        </select>

        <label htmlFor="">Progress</label>
        <input
          type="range"
          name="progress"
          value={formData.progress}
          min="0"
          max="100"
          id="progress"
          onChange={handleChange}
        />
        <div className="flex flex-col">
          <label htmlFor="">priority</label>

          <div className="flex">
            <input
              className="inline-block"
              type="radio"
              id="priority"
              name="priority"
              required={true}
              value={1}
              checked={formData.priority == 1}
              onChange={handleChange}
            />
            <label htmlFor="">1</label>
            <input
              className="inline-block"
              type="radio"
              id="priority"
              name="priority"
              required={true}
              value={2}
              checked={formData.priority == 2}
              onChange={handleChange}
            />
            <label htmlFor="">2</label>
            <input
              className="inline-block"
              type="radio"
              id="priority"
              name="priority"
              required={true}
              value={3}
              checked={formData.priority == 3}
              onChange={handleChange}
            />
            <label htmlFor="">3</label>
            <input
              className=""
              type="radio"
              id="priority"
              name="priority"
              required={true}
              value={4}
              checked={formData.priority == 4}
              onChange={handleChange}
            />
            <label htmlFor="">4</label>
            <input
              className="inline-block"
              type="radio"
              id="priority"
              name="priority"
              required={true}
              value={5}
              checked={formData.priority == 5}
              onChange={handleChange}
            />
            <label htmlFor="">5</label>
          </div>
        </div>
        <label htmlFor="">Status</label>
        <select
          className="bg-card"
          name="status"
          id="status"
          value={formData.status}
          onChange={handleChange}
        >
          <option value="not started">not started</option>
          <option value="started">started</option>
          <option value="done">done</option>
        </select>
        <input
          type="submit"
          value={EditMode ? "update ticket" : "create ticket"}
          className="btn"
        />
      </form>
    </div>
  );
};

export default TicketForm;
