import {ICategory} from "../Fin-Redux/Category/category-reduser";
import {instance} from "./API-settings";


export const categoryAPI = {
    getCategory() {
        return instance.get<ICategoryAPIGet>(`api/Category`)
            .then(res => {
                    debugger
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
    editCategory(id: number, category: ICategory) {
        return instance.put(`api/Category/${id}`, category).then(res => {
            console.log(res.data)
            return res.data
        })
    },
    deleteCategory(id: number) {
        return instance.delete(`api/Category/${id}`
        ).then(res => {
            console.log(res)
            return res
        })
    }

}


export interface ICategoryAPI {
    name: string
}

export interface ICategoryAPIGet {
    data: Array<ICategory>,
    isError: boolean
    message: "Success" | string,
}
