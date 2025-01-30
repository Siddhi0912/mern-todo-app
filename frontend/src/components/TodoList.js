import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const TodoList = ({ token }) => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [editingId, setEditingId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  // Fetch Todos
  const fetchTodos = useCallback(async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/todo", {
        headers: { "x-auth-token": token },
      });
      setTodos(res.data);
    } catch (err) {
      console.error(err);
    }
  }, [token]);

  useEffect(() => {
    if (token) fetchTodos();
  }, [token, fetchTodos]);

  // Add a Todo
  const addTodo = async () => {
    if (!title.trim()) return;
    try {
      await axios.post(
        "http://localhost:5000/api/todo",
        { title },
        { headers: { "x-auth-token": token } }
      );
      setTitle("");
      fetchTodos(); // Refresh list
    } catch (err) {
      console.error(err);
    }
  };

  // Delete a Todo
  const deleteTodo = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/todo/${id}`, {
        headers: { "x-auth-token": token },
      });
      fetchTodos(); // Refresh list
    } catch (err) {
      console.error(err);
    }
  };

  // Start Editing
  const startEditing = (todo) => {
    setEditingId(todo._id);
    setEditingTitle(todo.title);
  };

  // Cancel Editing
  const cancelEditing = () => {
    setEditingId(null);
    setEditingTitle("");
  };

  // Edit a Todo
  const editTodo = async (id) => {
    if (!editingTitle.trim()) return;
    try {
        await axios.put(
            `http://localhost:5000/api/todo/${id}`, // Ensure this matches the backend route
            { title: editingTitle },
            { headers: { "x-auth-token": token } }
          );
          
      setEditingId(null);
      setEditingTitle("");
      fetchTodos(); // Refresh list
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Todo List</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo._id}>
            {editingId === todo._id ? (
              <>
                <input
                  type="text"
                  value={editingTitle}
                  onChange={(e) => setEditingTitle(e.target.value)}
                />
                 <button className="save-button" onClick={() => editTodo(todo._id)}>
        Save
      </button>
      <button className="cancel-button" onClick={cancelEditing}>
        Cancel
      </button>
    </>
  ) : (
    <>
      {todo.title}
      <button className="edit-button" onClick={() => startEditing(todo)}>
        Edit
      </button>
      <button className="delete-button" onClick={() => deleteTodo(todo._id)}>
        Delete
      </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
