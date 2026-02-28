
import { useEffect, useState } from "react"
import type { Task } from "../types/Task";
import { getTasks } from "../api/todoApi";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchTasks = async () => {
    setLoading(true);
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (error) {
      setError("Can not load tasks!");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    fetchTasks();
  }, []);
  return (
    <div className="container mt-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="text-primary m-0">Todo App</h1>
        <button className="btn btn-success">Add Task</button>
      </div>

      {loading && (<div className="alert alert-info">Loading tasks...</div>)}
      {error && (<div className="alert alert-danger">{error}</div>)}

      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4 col-lg-4 mb-4" key={task.id}>
            <div className="card shadow-sm h-100">
              <div className="card-body">
                <h5 className="card-title">{task.title}</h5>
                <span className={`badge ${task.isDone ? "bg-success" : "bg-worning text-dark"}`}>
                  {task.isDone ? "Done": "Still on it"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
