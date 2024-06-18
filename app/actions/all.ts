"use server";
import { db } from "@/prisma/db";
import { revalidatePath } from "next/cache";

export async function createTodo(title: string, description: string) {
  await db.todo.create({
    data: {
      title,
      description,
      completed: false,
    },
  });
  revalidatePath("/");
}

export async function deletedTodo(id: number) {
  await db.todo.delete({ where: { id: id } });
  revalidatePath("/");
}

export async function completeTodo(id: number) {
    await db.todo.update({
      where: { id: id },
      data: { completed: true },
    });
    revalidatePath("/");
  }