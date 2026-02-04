import React, { useEffect, useState } from "react";
import { HiPencil, HiTrash, HiCheck, HiX } from "react-icons/hi";
import "./Todos.css";

export default function Todos() {
  const [todos, setTodos] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ title: "", body: "" });

  const API = "http://localhost:5000/todos"; // change if needed

  /* ================= FETCH ================= */
  const fetchTodos = async () => {
    const res = await fetch(API);
    const data = await res.json();
    setTodos(data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  /* ================= DELETE ================= */
  const deleteTodo = async (id) => {
    await fetch(`${API}/${id}`, { method: "DELETE" });
    fetchTodos();
  };

  /* ================= START EDIT ================= */
  const startEdit = (todo) => {
    setEditingId(todo._id);
    setEditData({ title: todo.title, body: todo.body });
  };

  /* ================= SAVE EDIT ================= */
  const saveEdit = async () => {
    await fetch(`${API}/${editingId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(editData),
    });

    setEditingId(null);
    fetchTodos();
  };

  return (
    <div className="todo-page">
      <div className="container py-5">

        <h2 className="text-white mb-4 fw-bold">My Tasks</h2>

        {todos.length === 0 && (
          <p className="text-secondary">No tasks yet</p>
        )}

        {todos.map((todo) => (

          <div key={todo._id} className="todo-item">

            {/* ================= NORMAL VIEW ================= */}
            {editingId !== todo._id ? (
              <>
                <div className="todo-content">
                  <h6 className="text-white m-0">{todo.title}</h6>
                  <small className="text-secondary">{todo.body}</small>
                </div>

                <div className="todo-actions">
                  <HiPencil
                    className="action-icon edit"
                    onClick={() => startEdit(todo)}
                  />
                  <HiTrash
                    className="action-icon delete"
                    onClick={() => deleteTodo(todo._id)}
                  />
                </div>
              </>
            ) : (

              /* ================= EDIT MODE ================= */
              <div className="edit-mode w-100">

                <input
                  className="todo-input mb-2"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                />

                <textarea
                  className="todo-input mb-2"
                  rows="2"
                  value={editData.body}
                  onChange={(e) =>
                    setEditData({ ...editData, body: e.target.value })
                  }
                />

                <div className="d-flex gap-2">
                  <button className="btn btn-orange btn-sm" onClick={saveEdit}>
                    <HiCheck /> Save
                  </button>

                  <button
                    className="btn btn-outline-light btn-sm"
                    onClick={() => setEditingId(null)}
                  >
                    <HiX /> Cancel
                  </button>
                </div>
              </div>
            )}

          </div>
        ))}

      </div>
    </div>
  );
}
