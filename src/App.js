import './output.css';
import Header from './Mycomponent/Header';
import AddTodo from './Mycomponent/AddTodo';
import Footer from './Mycomponent/Footer';
import Todo from './Mycomponent/Todo';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Mycomponent/About';
import Contact from './Mycomponent/Contact';
import axios from "axios";

function App() {
  const [authorized, setAuthorized] = useState(false);
  const [checked, setChecked] = useState(false);
  const [todos, setTodos] = useState([]);

  // ✅ CORRECT BACKEND API
  const API_URL = "https://dailyes.onrender.com/api/todos";

  // ===== PASSWORD CHECK =====
  useEffect(() => {
    const password = prompt("Enter password to open the app");
    if (password === "1234") {
      setAuthorized(true);
    } else {
      alert("Wrong password ❌");
    }
    setChecked(true);
  }, []);

  // ===== FETCH TODOS =====
  useEffect(() => {
    if (!authorized) return;

    axios.get(API_URL)
      .then(res => setTodos(res.data))
      .catch(err => console.error("Fetch error:", err));
  }, [authorized]);

  // ===== ADD TODO =====
  const add_todo = async (title, desc) => {
    try {
      const res = await axios.post(API_URL, { title, desc });
      setTodos(prev => [...prev, res.data]);
    } catch (err) {
      console.error(err);
      alert("Failed to add todo");
    }
  };

  // ===== EDIT TODO =====
  const onEdit = async (id, updatedTitle, updatedDesc, updatedStatus) => {
    try {
      const res = await axios.put(`${API_URL}/${id}`, {
        title: updatedTitle,
        desc: updatedDesc,
        status: updatedStatus,
      });

      setTodos(prev =>
        prev.map(todo => (todo._id === id ? res.data : todo))
      );
    } catch (err) {
      console.error(err);
      alert("Failed to edit todo");
    }
  };

  // ===== DELETE TODO =====
  const onDelete = async (todo) => {
    try {
      await axios.delete(`${API_URL}/${todo._id}`);
      setTodos(prev => prev.filter(t => t._id !== todo._id));
    } catch (err) {
      console.error(err);
      alert("Failed to delete todo");
    }
  };

  // ===== ACCESS DENIED SCREEN =====
  if (checked && !authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow text-center">
          <h2 className="text-xl font-bold text-red-600 mb-2">
            Access Denied
          </h2>
          <p className="text-gray-600 mb-4">
            Refresh the page and enter the correct password
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-indigo-600 text-white px-4 py-2 rounded"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!authorized) return null;

  // ===== MAIN APP =====
  return (
    <Router>
      <Header title="Daily-es" />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <AddTodo add_todo={add_todo} />
              <Todo
                todo={todos}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            </>
          }
        />

        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
