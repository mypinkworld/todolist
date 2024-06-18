import { db } from "@/prisma/db";
import { Todo } from "@prisma/client";
import { useState, useEffect } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material';
import AddTodoForm from "./components/AddTodoForm";

export default async function Home() {
  const todos = await db.todo.findMany({});

  return (
    <main className="flex flex-col items-center justify-between p-4">
      <h1>
        My todo list
      </h1>
      <Card variant="outlined" className="mb-4">
        <CardContent>
          <AddTodoForm />
        </CardContent>
      </Card>
      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between w-full p-2">
          <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
          <div>
            {/* <button onClick={() => deleteTodo(todo.id)}>Radera</button> */}
          </div>
        </div>
      ))}
    </main>
  );
}
