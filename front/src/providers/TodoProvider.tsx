import React, { createContext, Dispatch, useReducer, useContext } from "react";
import { ITodo } from "../models";
import { sortItems } from "../commons";
export type TodosState = ITodo[];

const TodosStateContext = createContext<TodosState>([]);

type Action =
  | { type: "FETCHALL"; payload: ITodo[] }
  | { type: "CREATE"; todo: ITodo }
  | { type: "TOGGLE"; id: number }
  | { type: "UPDATE"; todoUpdate: ITodo };

type TodosDispatch = Dispatch<Action>;
const TodosDispatchContext = createContext<TodosDispatch | undefined>(
  undefined
);

function todosReducer(state: TodosState, action: Action): TodosState {
  switch (action.type) {
    case "FETCHALL":
      return sortItems(action.payload);

    case "CREATE":
      return sortItems(state.concat(action.todo));
    case "TOGGLE":
      return sortItems(
        state.map((todo) =>
          todo.id === action.id
            ? { ...todo, isCompleted: !todo.isCompleted }
            : todo
        )
      );
    case "UPDATE":
      return sortItems(
        state
          .filter((todo) => todo.id !== action.todoUpdate.id)
          .concat(action.todoUpdate)
      );

    default:
      return state;
  }
}

export function TodosContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [todos, dispatch] = useReducer(todosReducer, []);

  return (
    <TodosDispatchContext.Provider value={dispatch}>
      <TodosStateContext.Provider value={todos}>
        {children}
      </TodosStateContext.Provider>
    </TodosDispatchContext.Provider>
  );
}

export const useTodosState = (): TodosState => {
  const state = useContext(TodosStateContext);
  if (!state) throw new Error("TodosProvider not found");
  return state;
};

export const useTodosDispatch = (): TodosDispatch => {
  const dispatch = useContext(TodosDispatchContext);
  if (!dispatch) throw new Error("TodosProvider not found");
  return dispatch;
};
