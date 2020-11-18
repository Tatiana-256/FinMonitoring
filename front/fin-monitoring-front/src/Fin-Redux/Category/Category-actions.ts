import {baseThunkType, InferActionsTypes} from "../store";
import {ICategory} from "./category-reduser";
import {categoryAPI, ICategoryAPI} from "../../Fin-Requests/category-API";


export type categoryActionsType = InferActionsTypes<typeof categoryActions>
//
export const categoryActions = {

    getCategories: (category: Array<ICategory>) => ({type: "categoryReducer/GET_CATEGORY", category} as const),
    deleteCategory: (id: string) => ({type: "categoryReducer/DELETE_CATEGORY", id} as const),
    addCategory: (newCategory: ICategory) => ({type: "categoryReducer/ADD_CATEGORY", newCategory} as const),
    editCategory: (id: string, category: ICategory) => ({type: "categoryReducer/EDIT_CATEGORY", id, category} as const),
};


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<categoryActionsType>


export const getCategory = (): thunkType => async (dispatch) => {
    let result = await categoryAPI.getCategory()
    if (result) {
        dispatch(categoryActions.getCategories(result))
    }
};

export const deleteCategory = (id: string): thunkType => async (dispatch) => {
    let result = await categoryAPI.deleteCategory(id)
    if (result) {
        dispatch(categoryActions.deleteCategory(id))
    }
}


export const addCategory = (category: ICategoryAPI): thunkType => async (dispatch) => {
    let result = await categoryAPI.addCategory(category)
    if (result) {
        dispatch(categoryActions.addCategory(result))
    }
};


export const editCategory = (id: string, category: ICategory): thunkType => async (dispatch) => {
    let result = await categoryAPI.editCategory(id, category)
    if (result === '') {
        dispatch(categoryActions.editCategory(id, category))
    }
}
