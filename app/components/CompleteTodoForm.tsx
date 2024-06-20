"use client";
import React from 'react';
import { Button } from '@mui/material';
import { completeTodo } from '../actions/all'; // completeTodo func actions all

const CompletedTodoForm = ({ id }: { id: number }) => {
  const handleCompletedTodo = async () => {
    await completeTodo(id);
  };

  return (
    <Button onClick={handleCompletedTodo} 
     variant="contained"
     size='small'
     sx={{
      backgroundColor: 'pink',
      '&:hover': { backgroundColor: 'black' },
      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
    }}>
      Completed
    </Button>
  );
};

export default CompletedTodoForm;