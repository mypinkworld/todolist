"use client";
import { useState } from 'react';
import { PrismaClient } from '@prisma/client';
import { TextField, Button, Box, Typography} from '@mui/material';
import { createTodo } from '../actions/all';

const AddTodoForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddTodo = async () => {
    if (!title) {
      setError('New Todo cannot be empty');
      return;
    }

    if (title.length > 10) {
      setError('Todo cannot be more than 10 letters');
      return;
    }

    await createTodo(title, description);
    setTitle('');
    setDescription('');
    setError(''); 
  };

  return (
  <Box sx={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  }}>
    {error && <Typography color="error" className="error-message" data-cy= "todo-error">{error}</Typography>}
    <TextField
      label="New Todo"
      variant="outlined"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      error={!!error}
      sx={{
        width: '200px', 
        mt: 1,
      }}
      name="todo" 
    />
    <TextField
      label="Description"
      variant="outlined"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
      sx={{
        width: '300px',
        mt: 1, 
      }}
      name="Description"
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
