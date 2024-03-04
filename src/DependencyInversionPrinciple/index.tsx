import { useData } from "./useFetch";

type ResponseType = {
    id: number,
    title: string
}

const fetcher = async (): Promise<ResponseType[]> => {
  const url = "https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url)
  return res.json()
};

/* const fetcher= async () : Promise<ResponseType[]> =>{
    return ({ id: 1, title: 'Hello' }, { id: 2, title: 'World' })
} */

/* const fetcher = async (): Promise<ResponseType[]> => {
    const posts = localStorage.getItem('posts')
    return posts ? JSON.parse(posts) : []
} */

const Todo = () => {
  const { data } = useData<ResponseType[]>({ key: '/todos', fetcher })

  if (!data) return <p>loanding...</p>

  return (
    <ul>
      {data.map((todo: any) => {
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

export default Todo;