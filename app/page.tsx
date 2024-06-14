import { db } from "@/prisma/db";

 
export default async function Home() {
  const todos = await db.todo.findMany(); // Assuming your model is named 'todo'

  return (
    <main className="flex flex-col items-center justify-between p-4">
      <h1 className="text-2xl font-bold text-gray-700 mb-8">
      My todo list
      </h1>

      {todos.map((todo) => (
        <div key={todo.id} className="flex items-center justify-between w-full p-2">
          <span className={`text-lg ${todo.completed ? 'line-through' : ''}`}>{todo.title}</span>
          <input type="checkbox" checked={todo.completed} readOnly />
        </div>
      ))}
    </main>
  );
}