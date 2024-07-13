import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

interface Task {
  id: string;
  task: string;
  description?: string;
  status: string;
  priority: string;
  dueDate?: Date;
  createdAt?: Date;
  updatedAt?: Date;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const q = query(collection(db, "tasks"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const tasksData: Task[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
        dueDate: doc.data().dueDate ? doc.data().dueDate.toDate() : null,
        createdAt: doc.data().createdAt ? doc.data().createdAt.toDate() : null,
        updatedAt: doc.data().updatedAt ? doc.data().updatedAt.toDate() : null,
      })) as Task[];
      setTasks(tasksData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <h3>{task.task}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          <p>Priority: {task.priority}</p>
          {task.dueDate && <p>Due: {task.dueDate.toLocaleString()}</p>}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
