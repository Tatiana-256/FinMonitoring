import {InferActionsTypes} from "./store";
import {IFund} from "./fund-reduser";


export type fundActionsType = InferActionsTypes<typeof actions>

export const actions = {
    // addTaskAC: (newTask: taskType) => ({type: ADD_TASK, newTask: newTask} as const)
    addFund: (newFund: IFund) => ({type: "fundReducer/ADD_FUND", newFund} as const)
}
