import { useFetchTodo } from "./hooks/useFetchTodo";

const TodoList = () => {
  const { todo, isFetching } = useFetchTodo();

  if (isFetching) return <p>loandig...</p>;

  return (
    <ul>
      {todo.map((todo) => {
        return (
          <li>
            <span>{todo.id}</span>
            <span>{todo.title}</span>
          </li>
        );
      })}
    </ul>
  );
};

export default TodoList;
