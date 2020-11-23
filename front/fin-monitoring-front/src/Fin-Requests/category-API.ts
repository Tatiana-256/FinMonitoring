import {ICategory} from "../Fin-Redux/Category/category-reduser";
import {instance} from "./API-settings";


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

}


export interface ICategoryAPI {
    categoryName: string
}
