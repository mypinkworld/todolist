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
    gap: '10px',
  }}>
    <TextField
      label="New Todo"
      variant="outlined"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      sx={{
        width: '200px', // Ökar bredden på textfältet
        mt: 1,
      }}
      name="todo" // Lägger till name för att kunna testa
    />
    <TextField
      label="Description"
      variant="outlined"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      sx={{
        width: '300px', // Ökar bredden på textfältet
        mt: 1, // margintop
        
      }}
    />
    <Button
      variant="contained"
      onClick={handleAddTodo}
      sx={{
        backgroundColor: 'pink',
        '&:hover': { backgroundColor: 'black' },
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      }}>
      Add Todo
    </Button>
  </Box>
);
};

export default AddTodoForm;
