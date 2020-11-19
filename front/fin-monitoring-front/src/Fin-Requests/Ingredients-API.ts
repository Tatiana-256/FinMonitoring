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
