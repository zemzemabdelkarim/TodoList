import React, { useEffect, useState, } from "react"
import { addTask } from "../api/todoApi";
import type { ResponseMessage } from "../types/ResponseMessage";

type Props = {
  onClose: () => void,
  setReload: () => void
}

export default function AddTask({ onClose, setReload }: Props) {
  const [title, setTitle] = useState<String>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<String | null>(null);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const data: ResponseMessage = await addTask(title);
      if (data.success) {
        setReload();
        onClose();
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("can not add task!");
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => { console.log("title: ", title) }, [title])

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        onClick={onClose}
      >
        {/* Modal Card */}
        <div
          className="bg-white w-full max-w-md rounded-2xl shadow-xl p-6 relative animate-fadeIn"
          onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
        >
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Add New Task
            </h2>

            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 text-xl"
            >
              ✕
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter task title..."
              onChange={handleTitleChange}
              autoFocus
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition"
              >
                Save
              </button>
            </div>
          </form>

          {/* Loading */}
          {loading && (
            <div className="mt-4 text-center text-blue-600 font-medium">
              Loading...
            </div>
          )}

          {/* Error */}
          {error && (
            <div className="mt-4 text-center text-red-600 font-medium">
              {error}
            </div>
          )}
        </div>
      </div>
    </>
  )
}