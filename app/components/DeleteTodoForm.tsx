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
     sx={{ backgroundColor: 'pink', '&:hover': { backgroundColor: 'black' } }}>
      Delete Todo
    </Button>
  );
};

export default DeleteTodoForm;