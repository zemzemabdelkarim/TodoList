//import React from 'react'

import { useEffect, useState } from "react"
import type { Task } from "../types/Task";
import { getTasks } from "../api/todoApi";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    getTasks().then(setTasks);
  }, []);

  useEffect(() => {
  }, []);
  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-primary">Todo App</h1>
        <button className="btn btn-success">Add Task</button>
      </div>
      {tasks.length > 0 && (
        <div>
          {tasks.map(((task, index) => (
            <div key={index}>
              <p>{task.task}</p>
              <p>{task.isDone? "Done": "Still on it"}</p>
            </div>
          )))}
        </div>
      )}
    </div>
  )
}
