import React, { useState } from 'react';

export default function AddTodo({ add_todo }) {
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');

  const add_data = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert('Title or Description cannot be blank');
      return;
    }
    add_todo(title, desc);
    setTitle('');
    setDesc('');
  };

  return (
    <div className="mt-10 flex items-center justify-center px-4">
      <form onSubmit={add_data} className="w-full max-w-md bg-gray-100 p-6 rounded-xl shadow-lg space-y-4">
        <h2 className="text-2xl font-bold text-center text-gray-800">Today's Tasks</h2>
        <h4 className="text-xl font-bold text-center text-gray-800">{new Date().toLocaleDateString("en-GB")}</h4>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600"> Task* </label>
          <input
            type="text"
            name="todo_title"
            value={title}
            onChange={e => setTitle(e.target.value)}
            required
            placeholder="Enter Task"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-col">
          <label className="mb-1 text-sm font-medium text-gray-600"> Time* </label>
          <input
            type="text"
            name="todo_desc"
            value={desc}
            onChange={e => setDesc(e.target.value)}
            required
            placeholder="Enter description"
            className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition duration-200"
        >
          Add
        </button>
      </form>
    </div>
  );
}
