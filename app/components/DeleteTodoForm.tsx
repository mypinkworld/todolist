"use client";
import React from 'react';
import { Button } from '@mui/material';
import { deletedTodo } from '../actions/all'; // deletedTodo func actions all

const DeleteTodoForm = ({ id }) => {
  const handleDeleteTodo = async () => {
    await deletedTodo(id);
  };

  return (
    <Button onClick={handleDeleteTodo} variant="contained" color="primary">
      Delete Todo
    </Button>
  );
};

export default DeleteTodoForm;