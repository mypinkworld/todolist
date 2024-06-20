import { db } from "@/prisma/db";
import { Todo } from "@prisma/client";
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, TextField, Typography, Box } from '@mui/material';
import AddTodoForm from "./components/AddTodoForm";
import DeleteTodoForm from "./components/DeleteTodoForm";
import CompletedTodoForm from "./components/CompleteTodoForm";

export default async function Home() {
  const todos = await db.todo.findMany({});

  return (
    <Card >
    <Box sx={{ margin: '0 auto', padding: 3, maxWidth: 600, boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)', borderRadius: 4, marginTop: 3, marginBottom: 3
 }}>
        <h1>My todo list</h1>
      <Card variant="outlined" sx={{ mb: 3 }}>
          <CardContent>
            <AddTodoForm />
          </CardContent>
        </Card>
        <h2 className="list-title align=center">My List</h2> 
        {todos.map((todo) => (
        <Card key={todo.id} variant="outlined" sx={{ mb: 1, width: '100%' }}>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <div>
              <Typography variant="h5" component="div" sx={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.title}
              </Typography>
              <Typography sx={{ color: 'gray' }}>
                {todo.description}
              </Typography>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <CompletedTodoForm id={todo.id} />
              <DeleteTodoForm id={todo.id} />
            </div>
          </div>
        </CardContent>
      </Card>
        ))}
      {/* </main> */}
    </Box>
              </Card>

  );
}
