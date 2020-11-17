import {categoryActionsType} from "./Category-actions";
import {baseThunkType} from "../store";
//
export type initialStateType = typeof initialState
const initialState = {
    category: [] as Array<ICategory>
};

export interface ICategory {
    id: string
    categoryName: string,

}

export const categoryReducer = (state = initialState, action: categoryActionsType): initialStateType => {
    switch (action.type) {
        case "categoryReducer/GET_CATEGORY":
            return {
                ...state,
                category: action.category
            }
        case "categoryReducer/DELETE_CATEGORY":
            return {
                ...state,
                category: state.category.filter(cat => cat.id !== action.id)
            }
    }

    return state;
};

//         case "fundReducer/ADD_FUND":
//             return {
//                 ...state,
//                 funds: [action.newFund, ...state.funds]
//             }
//         case "fundReducer/EDIT_FUND":
//             return {
//                 ...state,
//                 funds: state.funds.map(fund => {
//                     if (fund.id !== action.id) {
// debugger
//                         return fund
//                     } else {
//                         return {...fund, ...action.newFund}
//                     }
//                 })
//             }
//         case "fundReducer/delete_FUND":
//             return {
//                 ...state,
//                 funds: state.funds.filter(fund => fund.id !== action.id)
//             }
//     }
//
// }
//
// //
// // case CHANGE_LIST_TITLE:
// //     return {
// //         ...state, toDoLists: state.toDoLists.map((title: any) => {
// //                 if (title.id !== action.toDoListId) {
// //                     return title
// //                 } else {
// //                     return {...title, ...action.obj}
// //                 }
// //             }
// //         )
// //     }
//
// // changeListTitle: (toDoListId: string, obj: any) => ({
// //     type: CHANGE_LIST_TITLE, obj: obj, toDoListId: toDoListId
// // } as const),
//
//
// export interface IFund {
//     id: string,
//     fundName: string,
//     amount: number,
//     currency: string,
//     goal: number,
//     history: Array<IFundHistory>
// }
//
// export interface IFundHistory {
//     id: string
//     amount: number,
//     date: string,
// }
//
// export interface IFundAPI {
//     fundName: string,
//     amount: number,
//     currency: string,
//     goal: number,
//     history: Array<IFundHistory>
// }
//
// export interface IFundHistoryAPI {
//     amount: number,
//     date: string,
// }
