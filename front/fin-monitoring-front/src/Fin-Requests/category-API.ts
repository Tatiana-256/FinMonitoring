import axios from "axios";
import {Simulate} from "react-dom/test-utils";
import {ICategory} from "../Fin-Redux/Category/category-reduser";


const dev = 'https://localhost:5005'

const instance = axios.create({
    baseURL: dev,
    headers: {
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Origin': '*'
    }
})


export const categoryAPI = {
    getCategory() {
        return instance.get<Array<ICategory>>(`api/Category`)
            .then(res => {
                    console.log(res.data)
                    return res.data
                }
            )
    },
    addCategory(category: ICategoryAPI) {
        return instance.post("api/Category", category
        ).then(res => {
            console.log(res.data)
            return res.data
        })
    },
    editCategory(id: string, category: ICategoryAPI) {
        return instance.put(`api/Category/${id}`, category).then(res => {
            console.log(res.data)
            return res.data
        })
    },
    deleteCategory(id: string) {
        return instance.delete(`api/Category/${id}`
        ).then(res => {
            console.log(res)
            return res
        })
    }
    // }
}


export interface ICategoryAPI {
    categoryName: string
}
