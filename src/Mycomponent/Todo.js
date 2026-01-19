import React, { useState } from "react";

export default function Todo({ todo, onDelete, onEdit }) {
  return (
    <div className="mt-12 w-[95%] m-auto">
      {todo.length === 0 && <p className="text-center text-red-500 font-bold">No Tasks Yet</p>}
      {todo.length > 0 && <h3 className="text-center text-red-500 font-bold text-2xl">Tasks List</h3>}
      <div className='items'>
      {todo.map((t) => (
        <TodoItem
          key={t._id}
          todo={t}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
      </div>
    </div>
  );
}

export const TodoItem = ({ todo, onDelete, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [desc, setDesc] = useState(todo.desc);
  const [status, setStatus] = useState(todo.status || "pending");

  return (
    <div className="border p-4 mt-2 bg-white rounded shadow">
      {isEdit ? (
        <div>
          <input
            className="border p-2 w-full mb-2 rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            className="border p-2 w-full mb-3 rounded"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border p-2 w-full mb-3 rounded"
          >
            <option value="pending">Pending</option>
            <option value="ongoing">Ongoing</option>
            <option value="done">Done</option>
          </select>
          <div className="flex space-x-2">
            <button
              onClick={() => {
                onEdit(todo._id, title, desc, status);
                setIsEdit(false);
              }}
              className="bg-green-600 text-white px-4 py-2 rounded"
            >
              Save
            </button>
            <button
              onClick={() => setIsEdit(false)}
              className="bg-red-600 text-white px-4 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h4 className="font-bold text-lg">{todo.title}</h4>
          <p className="mb-2 text-gray-700">{todo.desc}</p>
          <span
            className={`inline-block mb-3 px-3 py-1 text-white rounded ${
              todo.status === "pending"
                ? "bg-yellow-500"
                : todo.status === "ongoing"
                ? "bg-blue-600"
                : "bg-green-600"
            }`}
          >
            {todo.status}
          </span>
          <div className="flex space-x-2">
            <button
              onClick={() => setIsEdit(true)}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Edit
            </button>
            <button
              onClick={() => onDelete(todo)}
              className="bg-red-600 text-white px-4 py-1 rounded"
            >
              Delete
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
