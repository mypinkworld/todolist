"use client";
import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogTitle } from '@mui/material';
import { deletedTodo } from '../actions/all';

const DeleteTodoForm = ({ id }: { id: number }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteTodo = async () => {
    await deletedTodo(id);
    handleClose(); 
  };

  return (
    <>
      <Button onClick={handleClickOpen}
       variant="contained"
       className="delete-btn"
       sx={{
        backgroundColor: 'pink',
        '&:hover': { backgroundColor: 'black' },
        boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
      }}>
        Delete Todo
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">
          {"Are you sure you want to delete?"}
      </DialogTitle>
      <DialogActions>
          <Button onClick={handleClose}
          variant="contained"
          sx={{
           backgroundColor: 'pink',
           '&:hover': { backgroundColor: 'black' },
           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
         }}>
          No
         </Button>
          <Button onClick={handleDeleteTodo}
          variant="contained"
          sx={{
           backgroundColor: 'pink',
           '&:hover': { backgroundColor: 'black' },
           boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
         }}>
            Yes
          </Button>
      </DialogActions>
    </Dialog>
  </>
  );
};

export default DeleteTodoForm;