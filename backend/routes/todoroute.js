const express = require("express");
const router = express.Router();
const Todo = require("../models/todomodel");

/* GET all todos */
router.get("/", async (req, res) => {
  const todos = await Todo.find();
  res.json(todos);
});

/* ADD todo */
router.post("/", async (req, res) => {
  const { title, desc, status } = req.body;

  const todo = new Todo({
    title,
    desc,
    status, // optional
  });

  res.json(await todo.save());
});

/* UPDATE todo */
router.put("/:id", async (req, res) => {
  const { title, desc, status } = req.body;

  const updatedTodo = await Todo.findByIdAndUpdate(
    req.params.id,
    { title, desc, status },
    { new: true, runValidators: true }
  );

  res.json(updatedTodo);
});

/* DELETE todo */
router.delete("/:id", async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.json({ message: "Todo deleted" });
});

module.exports = router;