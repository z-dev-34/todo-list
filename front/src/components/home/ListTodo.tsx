import { ITodo } from "../../models";
import EditTodoBtn from "../buttons/EditTodoBtn";
import ShowTodoBtn from "../buttons/ShowTodoBtn";

export default function ListTodos({ todos }: { todos: ITodo[] }) {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">Done</th>
          <th scope="col">Title</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        {todos && todos.length > 0 ? (
          todos.map((todo, index) => (
            <tr key={index}>
              <th scope="row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                </div>
              </th>
              <td>{todo.title}</td>
              <td>
                <ShowTodoBtn todo={todo} />
                <EditTodoBtn todo={todo} />
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3} className="text-center">
              empty
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );
}
