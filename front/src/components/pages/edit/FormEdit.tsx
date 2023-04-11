import { useState } from "react";
import { useForm } from "react-hook-form";
import { AxiosResponse, ITodo } from "../../../models";
import { useParams } from "react-router-dom";
import { updateAxios } from "../../../commons";
import { useTodosDispatch } from "../../../providers/TodoProvider";

export default function FormEdit({ todos }: { todos: ITodo[] }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ITodo>({
    mode: "onTouched",
  });
  const { id } = useParams();
  const dispatch = useTodosDispatch();
  const [success, setSucces] = useState<boolean>(false);
  const onSubmit = async (dataForm: ITodo) => {
    const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}${id}`;
    const response = (await updateAxios(url, dataForm)) as AxiosResponse;
    const { status } = response;
    if (status === 200) {
      dispatch({
        type: "UPDATE",
        todoUpdate: dataForm,
      });
      setSucces(true);
    } else {
      console.log("err");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {todos.map((todo, index) => (
        <div key={index}>
          <div className="mb-3">
            <label htmlFor="title-todo" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              id="title-todo"
              {...register("title", {
                required: true,
                maxLength: 255,
                value: todo.title,
              })}
            />
            {errors.title?.type === "required" && (
              <p role="alert" className="text-danger">
                Title is required
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="description-todo" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows={3}
              {...register("description", {
                required: false,
                maxLength: 500,
                value: todo.description,
              })}
            ></textarea>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckChecked"
              {...register("isCompleted", {
                required: false,
                value: todo.isCompleted,
              })}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckChecked"
            >
              Done
            </label>
          </div>
        </div>
      ))}
      <input type="submit" />
      {success && (
        <div className="alert alert-success" role="alert">
          This Todo is updated <a href="/">all to do list </a>
        </div>
      )}
    </form>
  );
}
