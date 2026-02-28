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
      <div className="modal fade show d-block" tabIndex={-1}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content shadow">

            <div className="modal-header">
              <h5 className="modal-title">Add New Task</h5>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              />
            </div>
            <form onSubmit={handleSubmit}>
              <div className="modal-body">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter task title..."
                  onChange={handleTitleChange}
                  autoFocus
                />
              </div>

              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  className="btn btn-primary"
                  type="submit"
                >
                  Save
                </button>
              </div>
            </form>
            {loading && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-primary">Loading ...</p>
              </div>
            )}
            {error && (
              <div className="d-flex justify-content-center align-items-center">
                <p className="text-danger">{error}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  )
}