import { db } from "@/prisma/db";
import { Todo } from "@prisma/client";
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, TextField, Typography, Box } from '@mui/material';
import AddTodoForm from "./components/AddTodoForm";
import DeleteTodoForm from "./components/DeleteTodoForm";

export default async function Home() {
  const todos = await db.todo.findMany({});

  return (
    <Box sx={{ m: 10 }}>
    <main className="flex flex-col items-center justify-between p-4">
      <h1>My todo list</h1>
  <Card variant="outlined" className="mb-4">
    <CardContent>
      <AddTodoForm />
    </CardContent>
  </Card>
  <h2 className="list-title">My List</h2> 
  {todos.map((todo) => (
    <Card key={todo.id} variant="outlined" className="mb-4 w-full">
    <CardContent>
      <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
        <div>
          <Typography variant="h5" component="div" style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </Typography>
          <Typography color="text.secondary">
            {todo.description}
          </Typography>
        </div>
        <div>
          <DeleteTodoForm id={todo.id} />
        </div>
      </div>
        {/* en knapp för att lägga till funktionalitet för att complete inte seed todos */}
      </CardContent>
    </Card>
  ))}
</main>
</Box>
  );
}
