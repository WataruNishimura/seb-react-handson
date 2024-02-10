import { useState } from "react";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const onSubmit = ({ title, content, date }) => {
    setTodos((prev) => {
      return [
        ...prev,
        {
          title,
          content,
          date,
          done: false,
        },
      ];
    });
  };

  return (
    <div className="flex flex-col justify-center items-center text-white p-8">
      <h1 className="font-bold text-4xl mb-4">Todo App</h1>
      <div className="flex flex-col">
        {todos.map((todo, index) => (
          <TodoItem key={index} data={todo} />
        ))}
      </div>
      <TodoInput onSubmit={onSubmit} />
    </div>
  );
}

export default App;
