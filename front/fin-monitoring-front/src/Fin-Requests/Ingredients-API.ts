import {instance} from "./API-settings";


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
    },

    addIngredient(ingredient: IIngredientAPI) {
        return instance.post("api/Ingredients", ingredient
        ).then(res => {
            console.log(res.data)
            return res.data
        })
    },
    editIngredient(id: string, ingredient: IIngredientAPI) {
        return instance.put(`api/Ingredients/${id}`, ingredient).then(res => {
            console.log(res.data)
            return res.data
        })
    },

}


export interface IIngredientAPI {
    ingredientName: string
}

export interface IIngredient {
    id: string | number,
    ingredientName: string
}
