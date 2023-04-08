import { useMemo } from "react";
import { ITodo } from "../../models";
import { postAxios } from "../../commons/index";
import { useTodosDispatch } from "../../providers/TodoProvider";
export default function AddTodoBtn({
  todo,
  disabled,
}: {
  todo: ITodo;
  disabled: boolean;
}) {
  const dispatch = useTodosDispatch();
  const handleClick = async () => {
    const url = `${process.env.REACT_APP_DATAURL}${process.env.REACT_APP_APIURl}`;
    const status = await postAxios(url, todo);
    console.log(status);
    if (status === 201) {
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
