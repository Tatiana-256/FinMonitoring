import {baseThunkType, InferActionsTypes} from "../store";
// import {ICa, IFundAPI} from "./fund-reduser";
// import {fundsAPI} from "../requests/api";


export type ingredientsActionsType = InferActionsTypes<typeof ingredientsActions>
//

export const ingredientsActions = {};
//     getFunds: (funds: Array<IFund>) => ({type: "fundReducer/GET_FUND", funds} as const),
//     addFund: (newFund: IFund) => ({type: "fundReducer/ADD_FUND", newFund} as const),
//     editFund: (id: string, newFund: IFund) => ({type: "fundReducer/EDIT_FUND", id, newFund} as const),
//     deleteFund: (id: string) => ({type: "fundReducer/delete_FUND", id} as const)
// }



// //_________________ thunk-creators____________________
type thunkType = baseThunkType<ingredientsActionsType>
