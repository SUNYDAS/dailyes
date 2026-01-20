import React, { useState } from "react";
import { Todoitem } from "./Todoitem";

export default function Todo({ todo, onDelete, onEdit }) {
  const [statusFilter, setStatusFilter] = useState("all");

  // 🔹 Apply status filter only
  const filteredTodos = todo.filter((t) => {
    return statusFilter === "all" || t.status === statusFilter;
  });

  return (
    <div className="mt-12 w-[95%] m-auto">
      {/* FILTER CONTROLS */}
      <div className="flex flex-wrap gap-4 mb-6 justify-center">
        {/* Status Filter */}
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Tasks</option>
          <option value="pending">Pending</option>
          <option value="ongoing">Ongoing</option>
          <option value="done">Done</option>
        </select>

        {/* Clear Filter */}
        <button
          onClick={() => setStatusFilter("all")}
          className="bg-gray-600 text-white px-4 py-2 rounded"
        >
          Clear
        </button>
      </div>

      {/* TASK LIST */}
      {filteredTodos.length === 0 && (
        <p className="text-center text-red-500 font-bold">
          No Tasks Found
        </p>
      )}

      {filteredTodos.length > 0 && (
        <h3 className="text-center text-green-600 font-bold text-2xl mb-4">
          Tasks List
        </h3>
      )}

      <div className="items">
        {[...filteredTodos].reverse().map((t) => (
          <Todoitem
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
