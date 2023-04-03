import { useParams } from "react-router";
export default function EditTodo() {
  const { id } = useParams();
  return <h1>Todo {id}</h1>;
}
