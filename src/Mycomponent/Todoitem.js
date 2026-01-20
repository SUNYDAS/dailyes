import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";


export const Todoitem = ({ todo, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const [status, setStatus] = useState(todo.status || "pending");

  return (
    <div className="border p-4 mt-2 bg-white">
      {isEdit ? (
        <div>
          <input
            className="border p-2 w-full mb-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input
            className="border p-2 w-full mb-3"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 w-full mb-3"
          >
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="done">Done</option>
          </select>

          <button
            onClick={() => {
              onEdit(todo._id, title, desc, status);
              setIsEdit(false);
            }}
            className="bg-green-600 text-white px-4 py-2 mr-2"
          >
            Save
          </button>

          <button
            onClick={() => setIsEdit(false)}
            className="bg-red-600 text-white px-4 py-2"
          >
            Cancel
          </button>
        </div>
      ) : (
        
        <div>
          <h4 className="font-bold text-2xl">{todo.title}</h4>

          <p className="mb-2 text-xl flex items-center gap-2 mt-4">
            <FontAwesomeIcon icon={faClock} />
            {todo.desc}
          </p>

          <p className="text-sm text-gray-500 mb-2">
          Posted on: {new Date(todo.createdAt).toLocaleDateString()}
          </p>

          <span
            className={`inline-block w-full mb-3 px-3 py-1 text-white rounded ${
              todo.status === "pending"
                ? "bg-red-400"
                : todo.status === "ongoing"
                ? "bg-yellow-500"
                : "bg-green-600"
            }`}
          >
            {todo.status}
          </span>

          <div>
            <button
              onClick={() => setIsEdit(true)}
              className="bg-blue-600 text-white px-4 py-1 mr-2"
            >
              Edit
            </button>

            <button
              onClick={() => onDelete(todo)}
              className="bg-red-600 text-white px-4 py-1"
            >
              Delete
            </button>
          </div>
        </div>

      )}
    </div>
  );
};
