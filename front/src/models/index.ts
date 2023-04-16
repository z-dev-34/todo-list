import { AxiosRequestConfig } from "axios";

export interface INewTodo {
    title: string ;
    description?: string;
    isCompleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }
export interface ITodo extends INewTodo {
  id : number;
}
  export interface AxiosResponse<T = never>  {
    data:IDataResponse ;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: any;
}

 interface IDataResponse {
  message:string;
  id:number;
}

export enum TypeActionBtn {
  EDIT="edit",
  SHOW="show"
}