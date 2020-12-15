import {IAPIRequest, instance} from "./API-settings";
import {ICategoryAPI} from "./category-API";


export const ingredientsAPI = {
    getIngredients() {
        return instance.get<GetResponse>(`api/Ingredients`)
            .then(res => {
                    debugger
                    console.log(res.data)
                    return res.data
                }
            )
    },

    addIngredient(ingredient: IIngredientAPI) {
        debugger
        return instance.post<PostResponse>("api/Ingredients", ingredient)
            .then(res => {
            console.log(res.data)
            return res.data
        })
    },
    deleteIngredient(id: number) {
        return instance.delete(`api/Ingredients/${id}`
        ).then(res => {
            console.log(res)
            return res
        })
    },

    editIngredient(id: number, ingredient: IIngredientAPI) {
        return instance.put(`api/Ingredients/${id}`, ingredient).then(res => {
            console.log(res.data)
            return res.data
        })
    },

};


export interface IIngredientAPI {
    name: string,
    measurementId: number
}

export interface IIngredient {
    id: number
    name: string,
    amount: number,
    measurementId: number
}

type GetResponse = IAPIRequest<Array<IIngredient>>
type PostResponse = IAPIRequest<IIngredient>
