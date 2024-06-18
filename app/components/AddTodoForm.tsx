"use client";
import { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import { TextField, Button, Box } from '@mui/material';
import { createTodo } from '../actions/all';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleAddTodo = async () => {
    if (!title) return;

    await createTodo(title, description);

    setTitle('');
    setDescription('');
  };

  return (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }}>
    <TextField
      label="New Todo"
      variant="outlined"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      style={{ marginRight: '10px' }}
      name="todo" // Lägger till name för att kunna testa
    />
    <TextField
      label="Description"
      variant="outlined"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      style={{ marginRight: '10px' }}
    />
    <Button
      variant="contained"
      onClick={handleAddTodo}
      sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'black' } }}>
      Add Todo
    </Button>
  </Box>
);
};

export default AddTodoForm;
