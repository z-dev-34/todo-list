import axios from "axios";
import { AxiosResponse, ITodo } from "../models";

export const postAxios = async(url:string,paylod:ITodo) => {
    try {
      const response =  await axios.post(url,paylod)
      return response;
  
    }
    catch(err) {
        return err
    }
} 


export const patchAxios  = (url:string,paylod:{isCompleted:boolean}):Promise<AxiosResponse> => {
  try {
    return axios.patch(url,paylod)
    

  }
  catch(err) {
      throw "err";
  }
} 
export const updateAxios  = (url:string,paylod:ITodo):Promise<AxiosResponse> => {
  try {
    return axios.patch(url,paylod)
    

  }
  catch(err) {
      throw "err";
  }
} 