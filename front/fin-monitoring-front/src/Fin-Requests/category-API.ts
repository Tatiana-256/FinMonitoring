import {ICategory} from "../Fin-Redux/Category/category-reduser";
import {IAPIRequest, instance} from "./API-settings";


export const categoryAPI = {
    getCategory() {
        return instance.get<GetResponse>(`api/Category`)
            .then(res => {
                    debugger
                    console.log(res.data)
                    return res.data
                }
            )
    },
    addCategory(category: ICategoryAPI) {
        return instance.post<PostResponse>("api/Category", category
        ).then(res => {
            debugger
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

type GetResponse = IAPIRequest<Array<ICategory>>
type PostResponse = IAPIRequest<ICategory>

