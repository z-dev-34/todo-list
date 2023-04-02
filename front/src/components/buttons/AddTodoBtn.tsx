import { useMemo } from "react";
import { ITodo } from "../../models";
import { postAxios } from "../../commons/index";
export default function AddTodoBtn({
  todo,
  setTodos,
  disabled,
}: {
  todo: ITodo;
  setTodos: (newTodo: ITodo) => void;
  disabled: boolean;
}) {
  const handleClick = async () => {
    const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}`;
    const response = await postAxios(url, todo);
    if (response === 201) {
      setTodos(todo);
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
