import {fundActionsType} from "./fund-actions";
import {baseThunkType} from "./store";

export type initialStateType = typeof initialState

const initialState = {
    funds: [] as Array<IFund>
};


export const fundReducer = (state = initialState, action: fundActionsType): initialStateType => {
    switch (action.type) {
        case "fundReducer/GET_FUND":
            return {
                ...state,
                funds: action.funds
            }
        case "fundReducer/ADD_FUND":
            return {
                ...state,
                funds: [action.newFund, ...state.funds]
            }
    }
    return state;

}


export interface IFund {
    id: string,
    fundName: string,
    amount: number,
    currency: string,
    goal: number,
    history: Array<IFundHistory>
}

export interface IFundHistory {
    id: string
    amount: number,
    date: string,
}

export interface IFundAPI {
    fundName: string,
    amount: number,
    currency: string,
    goal: number,
    history: Array<IFundHistory>
}

export interface IFundHistoryAPI {
    amount: number,
    date: string,
}
