const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
const Todo = require("../models/Todo");

// Get all todos
router.get("/", auth, async (req, res) => {
  try {
    const todos = await Todo.find({ user: req.user.id });
    res.json(todos);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Add a todo
router.post("/", auth, async (req, res) => {
  const { title } = req.body;
  try {
    const todo = new Todo({ title, user: req.user.id });
    await todo.save();
    res.json(todo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update a todo (Edit)
router.put("/:id", auth, async (req, res) => {
  const { title } = req.body;
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );
    res.json(updatedTodo);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});



// Delete a todo
router.delete("/:id", auth, async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
