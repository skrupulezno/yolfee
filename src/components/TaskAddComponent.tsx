import React, { useState, ChangeEvent } from "react";
import { db } from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const AddTask: React.FC = () => {
  const [task, setTask] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [priority, setPriority] = useState<string>("medium");
  const [dueDate, setDueDate] = useState<string>("");

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    if (name === "task") setTask(value);
    if (name === "description") setDescription(value);
    if (name === "priority") setPriority(value);
    if (name === "dueDate") setDueDate(value);
  };

  const addTask = async () => {
    if (task.trim()) {
      try {
        await addDoc(collection(db, "tasks"), {
          task,
          description,
          status: "pending",
          priority,
          dueDate: dueDate ? new Date(dueDate) : null,
          createdAt: serverTimestamp(),
          updatedAt: serverTimestamp(),
        });
        setTask("");
        setDescription("");
        setPriority("medium");
        setDueDate("");
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
  };

  return (
    <div>
      <input
        type="text"
        name="task"
        value={task}
        onChange={handleInputChange}
        placeholder="Task"
      />
      <input
        type="text"
        name="description"
        value={description}
        onChange={handleInputChange}
        placeholder="Description"
      />
      <select name="priority" value={priority} onChange={handleInputChange}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <input
        type="datetime-local"
        name="dueDate"
        value={dueDate}
        onChange={handleInputChange}
      />
      <button onClick={addTask}>Add Task</button>
    </div>
  );
};

export default AddTask;
