import axios from "axios";
import { ITodo } from "../models";

export const postAxios = async(url:string,paylod:ITodo) => {
    try {
       return await axios.post(url,paylod).then(res=>res.status)
    }
    catch(err) {
        return err
    }
} 