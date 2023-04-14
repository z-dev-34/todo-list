import { useParams } from "react-router";
import useGetAxios from "../../../hooks/useGetAxios";
import { BackHomeIcon } from "../../buttons/BackHomeIcon";

export default function ShowTodo() {
  const { id } = useParams();
  const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}${id}`;
  const todos = useGetAxios({
    url,
  });

  return (
    <div className="container m-5 p-5 rounded mx-auto bg-light shadow container-card-todo">
      <div className="row m-1 p-4">
        <div className="col">
          {todos ? (
            todos.map((todo, i) => (
              <div key={i}>
                <div className="text-center mx-auto display-inline-block">
                  <h1 className="p-1 h1">todo : {todo.title}</h1>
                  {todo.isCompleted ? (
                    <p className="status-done">done</p>
                  ) : (
                    <p className="status-dont-done">not done</p>
                  )}
                </div>
                <h5 className="h5 mt-5">Description </h5>
                <p className="lead mt-5 mb-5">
                  {todo.description || "dont have description"}
                </p>
                <div className="text-right mt-5 mt-3">
                  <strong>Create the :</strong>{" "}
                  {todo.createdAt && todo.createdAt.toString()}
                </div>
                <BackHomeIcon />
              </div>
            ))
          ) : (
            <p>Todo not found</p>
          )}
        </div>
      </div>
    </div>
  );
}
