import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import React from "react";
import "./App.css";
import TodoInput from "./Todos/TodoInput";
import TodoList from "./Todos/TodoList";

const client = new ApolloClient({
  uri: "http://localhost:8080/v1/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header>
          <h2>GraphQL Todo App 🚀</h2>
        </header>
        <TodoInput />
        <TodoList />
      </div>
    </ApolloProvider>
  );
}

export default App;
