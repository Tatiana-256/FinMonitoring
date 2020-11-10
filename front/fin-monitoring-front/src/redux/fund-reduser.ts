import {fundActionsType} from "./fund-actions";

export type initialStateType = typeof initialState

const initialState = {
    funds: [] as Array<IFund>
};


export const fundReducer = (state = initialState, action: fundActionsType): initialStateType => {
    switch (action.type) {
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
    name: string,
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
