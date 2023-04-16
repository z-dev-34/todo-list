import { AxiosResponse, ITodo } from "../../models";
import { postAxios } from "../../commons/index";
import { useTodosDispatch } from "../../providers/TodoProvider";
export default function AddTodoBtn({
  todoTitle,
  disabled,
  setTodoTitle,
}: {
  todoTitle: string;
  disabled: boolean;
  setTodoTitle: (arg: string) => void;
}) {
  const dispatch = useTodosDispatch();
  const handleClick = async () => {
    const todo: ITodo = {
      id: 0,
      title: todoTitle,
      isCompleted: false,
    };
    const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}`;
    const response = (await postAxios(url, todo)) as AxiosResponse;
    const { status, data } = response;
    if (status === 201) {
      setTodoTitle("");
      todo.id = data.id;
      dispatch({
        type: "CREATE",
        todo,
      });
    } else {
      console.log("err");
    }
    //
  };

  return (
    <button
      type="button"
      className="btn btn-primary"
      onClick={handleClick}
      disabled={disabled}
    >
      Add
    </button>
  );
}
