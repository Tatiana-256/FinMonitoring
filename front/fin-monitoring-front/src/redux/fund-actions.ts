import {baseThunkType, InferActionsTypes} from "./store";
import {IFund, IFundAPI} from "./fund-reduser";
import {fundsAPI} from "../requests/api";


export type fundActionsType = InferActionsTypes<typeof actions>

export const actions = {
    // addTaskAC: (newTask: taskType) => ({type: ADD_TASK, newTask: newTask} as const)
    getFunds: (funds: Array<IFund>) => ({type: "fundReducer/GET_FUND", funds} as const),
    addFund: (newFund: IFund) => ({type: "fundReducer/ADD_FUND", newFund} as const)
}


//_________________ thunk-creators____________________

type thunkType = baseThunkType<fundActionsType>

export const addFund = (fund: IFundAPI): thunkType => async (dispatch) => {
    debugger
    let result = await fundsAPI.addFund(fund)
    console.log(result)
    debugger
    console.log(result)
    if (result) {
        dispatch(actions.addFund(result))
    }
};



