"use client";
import React from 'react';
import { Button } from '@mui/material';
import { deletedTodo } from '../actions/all'; // deletedTodo func actions all

const DeleteTodoForm = ({ id }: { id: number }) => {
  const handleDeleteTodo = async () => {
    await deletedTodo(id);
  };

  return (
    <Button onClick={handleDeleteTodo}
     variant="contained"
     sx={{
      backgroundColor: 'pink',
      '&:hover': { backgroundColor: 'black' },
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', // Lägger till skugga
    }}>
      Delete Todo
    </Button>
  );
};

export default DeleteTodoForm;