import {fundActionsType} from "./fund-actions";

export type initialStateType = typeof initialState

const initialState = {
    funds: [] as Array<IFund>
};


export const fundReducer = (state = initialState, action: fundActionsType): initialStateType => {
    switch (action.type) {

    }
    return state;

}

interface IFund {
    name: string,
    id: string,
    currency: string,
    goal: string,
    history: Array<IFundHistory>
}

interface IFundHistory {
    amount: number,
    date: string,
    id: string
}
