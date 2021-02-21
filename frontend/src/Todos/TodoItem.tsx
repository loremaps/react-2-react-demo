import React from "react";
import { Todo, useUpdateTodoByIdMutation } from "../generated/graphql";
import "./todos.css";

export default function TodoItem({ todo }: { todo: Todo }) {
  const [updateTodo] = useUpdateTodoByIdMutation();

  function handleToggle() {
    updateTodo({
      variables: {
        pk_columns: { id: todo.id },
        _set: { is_completed: !todo.is_completed },
      },
      // optimisticResponse: {
      //   __typename: "mutation_root",
      //   update_todo_by_pk: {
      //     __typename: "todo",
      //     id: todo.id,
      //     is_completed: !todo.is_completed,
      //   },
      // },
    });
  }

  function prefix(id: number) {
    return `todo-${id}`;
  }

  return (
    <li>
      <input
        id={prefix(todo.id)}
        type="checkbox"
        checked={todo.is_completed}
        onChange={handleToggle}
      />
      <label htmlFor={prefix(todo.id)}>{todo.title}</label>
    </li>
  );
}
