import axios from "axios";
import { AxiosResponse, INewTodo, ITodo } from "../models";

export const postAxios = async(url:string,paylod:INewTodo) => {
    try {
      const response =  await axios.post(url,paylod)
      return response;
  
    }
    catch(err) {
        return err
    }
} 


export const patchAxios  = (url:string):Promise<AxiosResponse> => {
  try {
    return axios.patch(url)
  }
  catch(err) {
      throw "err";
  }
} 
export const updateAxios  = (url:string,paylod:ITodo):Promise<AxiosResponse> => {
  try {
    return axios.put(url,paylod)
    

  }
  catch(err) {
      throw "err";
  }
} 

export const sortItems = (items:ITodo[]):ITodo[]=>{
 return  items.sort(function (x, y) {
    return x.isCompleted === y.isCompleted ? 0 : !x.isCompleted ? -1 : 1;
  });
}