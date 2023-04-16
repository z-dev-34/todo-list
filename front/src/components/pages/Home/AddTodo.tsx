import { ChangeEvent, Fragment, useState } from "react";
import AddTodoBtn from "../../buttons/AddTodoBtn";

export default function AddTodo() {
  const [todoTitle, setTodoTitle] = useState<string>("");
  const [disabled, setDisabled] = useState<boolean>(true);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const title = e.target.value;
    if (title) {
      setDisabled(false);
    }
    setTodoTitle(title);
  };
  return (
    <Fragment>
      <div className="row">
        <div className="col">
          <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
            <div className="col">
              <input
                className="form-control form-control-lg border-0 add-todo-input bg-transparent rounded"
                type="text"
                name="title"
                placeholder="Add new to do.."
                value={todoTitle}
                onChange={handleChange}
              />
            </div>
            <div className="col-auto px-0 mx-0 mr-2">
              <AddTodoBtn
                todoTitle={todoTitle}
                disabled={disabled}
                setTodoTitle={setTodoTitle}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
    </Fragment>
  );
}
