import {baseThunkType, InferActionsTypes} from "../store";
import {ICategory} from "./category-reduser";
import {categoryAPI} from "../../Fin-Requests/category-API";


export type categoryActionsType = InferActionsTypes<typeof categoryActions>
//
export const categoryActions = {

    getCategories: (category: Array<ICategory>) => ({type: "categoryReducer/GET_CATEGORY", category} as const)
};
//     addFund: (newFund: IFund) => ({type: "fundReducer/ADD_FUND", newFund} as const),
//     editFund: (id: string, newFund: IFund) => ({type: "fundReducer/EDIT_FUND", id, newFund} as const),
//     deleteFund: (id: string) => ({type: "fundReducer/delete_FUND", id} as const)
// }


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<categoryActionsType>


export const getCategory = (): thunkType => async (dispatch) => {
    let result = await categoryAPI.getCategory()
    if (result) {
        dispatch(categoryActions.getCategories(result))
    }
};

// export const addCate = (fund: IFundAPI): thunkType => async (dispatch) => {
//     let result = await fundsAPI.addFund(fund)
//     if (result) {
//         dispatch(actions.addFund(result))
//     }
// };
//
// export const deleteFund = (id: string): thunkType => async (dispatch) => {
//     let result = await fundsAPI.deleteFund(id)
//     if (result) {
//         dispatch(actions.deleteFund(id))
//     }
// }
//
//
// export const editFundAC = (id: string, fund: IFund): thunkType => async (dispatch) => {
//     let result = await fundsAPI.editFund(id, fund)
//     debugger
//     if (result === '') {
//         dispatch(actions.editFund(id, fund))
//     }
// }
