// import React, { useEffect, useState } from 'react';
// import { getTodos } from '../actions/all';

// // Antag att detta är en funktion som anropar din API-endpoint som använder getTodos
// async function fetchTodos() {
//   const response = await fetch('/api/todos');
//   if (!response.ok) {
//     throw new Error('Failed to fetch todos');
//   }
//   return await response.json();
// }

// function TodoItem() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos().then(setTodos).catch(console.error);
//   }, []);

//   return (
//     <div>
//       <h1>Todos</h1>
//       <ul>
//         {todos.map(todo => (
//           <li key={todo.id}>{todo.title} - {todo.completed ? 'Done' : 'Pending'}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoItem;