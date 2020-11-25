import {baseThunkType, InferActionsTypes} from "../store";
import {IBagStoreItem} from "./BagStore-reduser";


export type bagActionsType = InferActionsTypes<typeof bagActions>
//
export const bagActions = {
    addProductToBag: (product: IBagStoreItem) => ({type: "bagReducer/ADD_PRODUCT_TO_BAG", product} as const),
    deleteProductFromBag: (id: string) => ({type: "bagReducer/DELETE_PRODUCT_FROM_BAG", id} as const),
    addTotalToBag: (number: number) => ({type: "bagReducer/ADD_TOTAL_TO_BAG", number} as const),
    deleteSumFromBag: (number: number) => ({type: "bagReducer/DELETE_SUM_FROM_BAG", number} as const)

    // getCategories: (category: Array<ICategory>) => ({type: "categoryReducer/GET_CATEGORY", category} as const),
    // editCategory: (id: string, category: ICategory) => ({type: "categoryReducer/EDIT_CATEGORY", id, category} as const),
};


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<bagActionsType>

