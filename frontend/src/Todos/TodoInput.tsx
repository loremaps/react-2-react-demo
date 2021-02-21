import React, { FormEvent, useState } from "react";
import { namedOperations, useInsertTodoMutation } from "../generated/graphql";

export default function TodoInput() {
  const [value, setValue] = useState("");

  const [addTodo, { loading, error }] = useInsertTodoMutation({
    refetchQueries: [namedOperations.Query.Todos],
  });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    await addTodo({ variables: { object: { title: value } } });
    setValue("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type="text"
          placeholder="What needs to be done?"
        />
        <button type="submit">Add Todo</button>
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </div>
  );
}
