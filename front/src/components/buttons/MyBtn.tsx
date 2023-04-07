import { useNavigate } from "react-router-dom";
import { ITodo } from "../../models";

export const MyBtn = ({
  children,
  todo,
  type,
  disabled,
}: {
  children: any;
  todo: ITodo;
  type: string;
  disabled?: boolean;
}) => {
  const navigate = useNavigate();
  const handleClick = (): void => {
    navigate(`/todo/${todo.id}/${type}`);
  };
  return (
    <>
      <button
        className="btn btn-link m-1"
        onClick={handleClick}
        disabled={disabled}
      >
        {children}
      </button>
    </>
  );
};
