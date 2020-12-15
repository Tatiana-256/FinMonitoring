import axios from "axios";
import {ICategory} from "../Fin-Redux/Category/category-reduser";

const dev = 'https://localhost:5007'

export const instance = axios.create({
    baseURL: dev,
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
})


export interface IAPIRequest<T> {
    data: T,
    isError: boolean
    message: "Success" | string | null,
}
