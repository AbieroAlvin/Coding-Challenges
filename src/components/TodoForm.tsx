import { useState, FormEvent } from "react";

interface TodoProps {
  addTodo: (text: string) => void;
}

const TodoForm: React.FC<TodoProps> = ({ addTodo }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (value) {
      // add todo
      addTodo(value);

      // clear form after submission
      setValue("");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={value}
        placeholder="Add Today's Task"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
