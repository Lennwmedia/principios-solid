import { useEffect, useState } from "react";
import type { TodoType } from "../services/todos";
import { fetchTodos } from "../services/todos";


export const useFetchTodo = () => {
    const [todo, setTodo] = useState<TodoType[]>([]);
    const [isFetching, setIsFetching] = useState(true);

    useEffect(() => {
        fetchTodos()
        .then(todos => setTodo(todos))
        .finally(() => setIsFetching(false))
    }, []);
 
    return { todo, isFetching }
};
