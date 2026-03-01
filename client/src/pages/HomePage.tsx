
import { useEffect, useState } from "react"
import type { Task } from "../types/Task";
import { getTasks } from "../api/todoApi";
import AddTask from "../components/AddTask";

export default function HomePage() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [showAddTask, setShowAddTask] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [reload, setReload] = useState<boolean>(true);

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
    setReload(false);
  }, [reload]);

  useEffect(() => {console.log(tasks);},[tasks])
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-blue-600">
          Todo App
        </h1>

        <button
          onClick={() => setShowAddTask(true)}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow transition"
        >
          Add Task
        </button>
      </div>

      {/* Loading */}
      {loading && (
        <div className="bg-blue-100 text-blue-700 px-4 py-3 rounded-lg mb-4">
          Loading tasks...
        </div>
      )}

      {/* Error */}
      {error && (
        <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg mb-4">
          {error}
        </div>
      )}

      {/* Task List */}
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <div
            key={task.id}
            className="flex items-center gap-4 bg-white px-5 py-4 rounded-xl shadow-sm hover:shadow-md transition"
          >
            {/* Number Circle */}
            <div
              className={`flex items-center justify-center w-8 h-8 text-sm font-semibold rounded-full transition
          ${task.done
                  ? "bg-green-100 text-green-700"
                  : "bg-blue-100 text-blue-700"
                }`}
            >
              {index + 1}
            </div>

            {/* Title */}
            <h5
              className={`text-gray-800 font-medium transition ${task.done ? "line-through text-gray-400" : ""
                }`}
            >
              {task.title}
            </h5>
          </div>
        ))}
      </div>

      {/* Drawer */}
      {showAddTask && (
        <AddTask
          onClose={() => setShowAddTask(false)}
          setReload={() => setReload(true)}
        />
      )}
    </div>
  )
}
