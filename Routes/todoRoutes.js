import express from 'express';
import { addTodo, deleteTodo, getTodo, updateTodo } from "../Controller/todoController.js";

const router = express.Router();

// POST route for adding todo
router.post('/addtodo', addTodo);

// GET route for fetching todos
router.get('/gettodo', getTodo);

// PUT route for updating todo
router.put('/updatetodo/:id', updateTodo);

// DELETE route for deleting todo
router.delete('/deletetodo/:id', deleteTodo);

export default router;