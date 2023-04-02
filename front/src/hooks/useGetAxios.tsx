import { useEffect, useState } from "react";
import Axios from "axios";
import { ITodo } from "../models";

export default function useGetAxios({ url }: { url: string }) {
  const [data, setData] = useState<ITodo[]>([]);
  useEffect(() => {
    Axios.get(url).then((res) => setData((v) => res.data));
  }, []);
  return data;
}
