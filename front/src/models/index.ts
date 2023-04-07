import { AxiosRequestConfig } from "axios";

export interface ITodo {
    id?: number;
    title: string ;
    description: string;
    isCompleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
  }

  export interface AxiosResponse<T = never>  {
    data: T;
    status: number;
    statusText: string;
    headers: Record<string, string>;
    config: AxiosRequestConfig<T>;
    request?: any;
}
export enum TypeActionBtn {
  EDIT="edit",
  SHOW="show"
}