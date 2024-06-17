import { db } from "@/prisma/db";
import { Checkbox, Button, TextField, Typography, Box } from '@mui/material';
import React, { useState, useEffect } from 'react';

export default async function Home() {
  // const todos = await db.todo.findMany();

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  useEffect(() => {
    const fetchTodos = async () => {
      const response = await fetch('/api/todos');
      const data = await response.json();
      setTodos(data);
    };
    fetchTodos();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title: newTodo }),
    });
    if (response.ok) {
      const todo = await response.json();
      setTodos([...todos, todos]);
      setNewTodo(''); 
    }
  };
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'between', p: 4 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        My todo list
      </Typography>
      <div>My List</div>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Add new todo"
          variant="outlined"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" sx={{ mt: 2 }}>
          Add Todo
        </Button>
      </form>
          <Button variant="outlined">Delete</Button>
          </Box>
  );
}