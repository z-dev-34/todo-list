import { useEffect, useState } from "react";
import Axios from "axios";
import { ITodo } from "../models";

export default function useGetAxios({ url }: { url: string }) {
  const [data, setData] = useState<ITodo[]>([]);
  const setTodos = (newTodo: ITodo): void => {
    setData([newTodo, ...data]);
  };
  useEffect(() => {
    Axios.get(url).then((res) => setData((v) => res.data));
  }, []);
  return [data, setTodos] as const;
}
