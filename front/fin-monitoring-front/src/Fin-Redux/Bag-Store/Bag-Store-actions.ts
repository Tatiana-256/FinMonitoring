import {baseThunkType, InferActionsTypes} from "../store";



export type bagActionsType = InferActionsTypes<typeof bagActions>
//
export const bagActions = {


    // getCategories: (category: Array<ICategory>) => ({type: "categoryReducer/GET_CATEGORY", category} as const),
    // deleteCategory: (id: string) => ({type: "categoryReducer/DELETE_CATEGORY", id} as const),
    // addCategory: (newCategory: ICategory) => ({type: "categoryReducer/ADD_CATEGORY", newCategory} as const),
    // editCategory: (id: string, category: ICategory) => ({type: "categoryReducer/EDIT_CATEGORY", id, category} as const),
};


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<bagActionsType>

