import React from "react";
import { useTodosQuery } from "../generated/graphql";
import TodoItem from "./TodoItem";
import "./todos.css";

export default function TodoList() {
  const { data, loading, error } = useTodosQuery();

  if (loading) {
    return <div>loading...</div>;
  } else if (error) {
    return <div>oops: {error.message}</div>;
  }

  return (
    <ul className="todo-list">
      {data?.todo.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}
