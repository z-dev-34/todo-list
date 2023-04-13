import { useEffect } from "react";
import { patchAxios } from "../../../commons";
import { TypeActionBtn } from "../../../models";
import {
  useTodosDispatch,
  useTodosState,
} from "../../../providers/TodoProvider";
import { MyBtn } from "../../buttons/MyBtn";
import useGetAxios from "../../../hooks/useGetAxios";

export default function ListTodos() {
  const dispatch = useTodosDispatch();
  const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}`;
  const todos = useGetAxios({
    url,
  });
  console.log(todos);
  useEffect(() => {
    dispatch({
      type: "FETCHALL",
      payload: todos,
    });
  }, [todos]);
  const todosItems = useTodosState();
  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}${value}`;
    const response = await patchAxios(url);
    const { status } = response;
    if (status === 200) {
      dispatch({
        type: "TOGGLE",
        id: parseInt(value),
      });
    } else {
    }
  };
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
        {todosItems && todosItems.length > 0 ? (
          todosItems.map((todo, index) => (
            <tr key={index}>
              <th scope="row">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    checked={todo.isCompleted}
                    value={todo.id}
                    id="flexCheckDefault"
                    onChange={handleChange}
                    disabled={todo.isCompleted}
                  />
                  {todo.isCompleted}
                </div>
              </th>
              <td
                className={
                  todo.isCompleted ? "title-todo title-through" : "title-todo"
                }
              >
                {todo.title}
              </td>
              <td>
                <MyBtn
                  todo={todo}
                  type={TypeActionBtn.SHOW}
                  disabled={todo.isCompleted}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-eye-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z"></path>
                    <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"></path>
                  </svg>
                </MyBtn>
                <MyBtn todo={todo} type={TypeActionBtn.EDIT}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    fill="currentColor"
                    className="bi bi-pencil-square"
                    viewBox="0 0 16 16"
                  >
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"></path>
                    <path
                      fillRule="evenodd"
                      d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                    ></path>
                  </svg>
                </MyBtn>
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
