import { useParams } from "react-router";
import FormEdit from "./FormEdit";
import useGetAxios from "../../../hooks/useGetAxios";
import { TodosContextProvider } from "../../../providers/TodoProvider";
export default function EditTodo() {
  const { id } = useParams();
  const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}${id}`;
  const todos = useGetAxios({
    url,
  });
  console.log(todos);
  return (
    <TodosContextProvider>
      <div className="container m-5 p-2 rounded mx-auto bg-light shadow container-card-todo">
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-center mx-auto display-inline-block">
              <h1>Todo {id}</h1>
            </div>
            <FormEdit todos={todos} />
          </div>
        </div>
      </div>
    </TodosContextProvider>
  );
}
