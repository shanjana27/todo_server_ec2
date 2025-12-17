import Todo from "../Model/todoModel.js";

// CREATE
export const addTodo = async (req, res) => {
  try {
    console.log("Request body:", req.body);

    const data = new Todo(req.body);
    await data.save();

    res.status(201).json({ message: "Todo added successfully" });
  } catch (err) {
    console.error("Error in addTodo:", err);
    res.status(500).json({ message: err.message });
  }
};

// READ
export const getTodo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// UPDATE
export const updateTodo = async (req, res) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      { todo: req.body.todo },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.status(200).json({ message: "Todo updated successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// DELETE
export const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id) 
    res.status(200).json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("DELETE ERROR:", error.message);
    res.status(500).json({ error: error.message });
  }
};
