import axios from "axios";
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


export const ingredientsAPI = {
    getIngredients() {
        return instance.get<Array<IIngredient>>(`api/Ingredients`)
            .then(res => {
                    console.log(res.data)
                    return res.data
                }
            )
    },
    deleteIngredient(id: string) {
        return instance.delete(`api/Ingredients/${id}`
        ).then(res => {
            console.log(res)
            return res
        })
    }
    // addCategory(category: ICategoryAPI) {
    //     return instance.post("api/Category", category
    //     ).then(res => {
    //         console.log(res.data)
    //         return res.data
    //     })
    // },
    // editCategory(id: string, category: ICategoryAPI) {
    //     return instance.put(`api/Category/${id}`, category).then(res => {
    //         console.log(res.data)
    //         return res.data
    //     })
    // },

    // }
    // }
}


export interface ICategoryAPI {
    categoryName: string
}

export interface IIngredient {
    id: string,
    ingredientName: string
}
