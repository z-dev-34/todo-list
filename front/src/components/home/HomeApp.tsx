import useGetAxios from "../../hooks/useGetAxios";
import AddTodo from "../AddTodo";
import ListTodo from "./ListTodo";

export default function HomeApp() {
  const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}`;
  const [todos, setTodos] = useGetAxios({
    url,
  });
  return (
    <div className="container m-5 p-2 rounded mx-auto bg-light shadow container-card-todo">
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-center mx-auto display-inline-block">
            <h1>Todo List</h1>
          </div>
        </div>
        <AddTodo setTodos={setTodos} />
        <ListTodo todos={todos} />
      </div>
    </div>
  );
}
