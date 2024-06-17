import { db } from "@/prisma/db";

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const todos = await db.todo.findMany();
  } else if (req.method === "POST") {
    const { title } = req.body;
    try {
      const newTodo = await db.todo.create({
        data: {
          title,
          completed: false, 
        },
      });
      res.status(201).json(newTodo);
    } catch (error) {
      res.status(500).json({ error: "Failed to create todo" });
    }
  } else {
    res.setHeader("Allow", ["GET", "POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
