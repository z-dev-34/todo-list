import { useParams } from "react-router";
export default function ShowTodo() {
  const { id } = useParams();
  return <h1>Todo {id}</h1>;
}
