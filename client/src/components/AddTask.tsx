import React, { useEffect, useState } from "react"

type Props = {
  onClose: () => void
}

export default function AddTask({ onClose }: Props) {
  const [title, setTitle] = useState<String>("");
  
  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  }

  useEffect(()=>{console.log("title: ", title)}, [title])

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
              >
                Save
              </button>
            </div>

          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show"></div>
    </>
  )
}