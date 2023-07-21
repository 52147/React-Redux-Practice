import React, { useState, useEffect } from "react";
import axios from "axios";

export const About = () => {
    const [todos, setTodos] = useState([]);


  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => {
        setTodos(response.data);
      })
      .catch((error) => {
        console.error("Error fetching todos:", error);
      });
  }, []);

  return (
    <>
    <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
    </ul>
      </>
  )
}
