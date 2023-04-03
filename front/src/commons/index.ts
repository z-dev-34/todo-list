import axios from "axios";
import { ITodo } from "../models";

export const postAxios = async(url:string,paylod:ITodo) => {
    try {
      const response =  await axios.post(url,paylod)
      return response.status
  
    }
    catch(err) {
        return err
    }
} 