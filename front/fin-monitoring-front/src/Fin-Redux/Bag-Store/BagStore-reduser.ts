import {bagActionsType} from "./Bag-Store-actions";
import dd from '../../common-images/latte.jpg'

export type initialStateType = typeof initialState
const initialState = {
    bagStore: [
        // {
        //     id: '231423rjhgr',
        //     name: 'Latte',
        //     amount: 1,
        //     price: 12
        // },
        // {
        //     id: 'dfjfh4653765',
        //     name: 'Capuchino',
        //     amount: 1,
        //     price: 16
        // }
    ] as Array<IBagStoreItem>,
    total: 0
};


export const bagReducer = (state = initialState, action: bagActionsType): initialStateType => {
    switch (action.type) {
        case "bagReducer/ADD_PRODUCT_TO_BAG":
            return {
                ...state,
                bagStore: [
                    ...state.bagStore, action.product

                ]
            }
        case "bagReducer/DELETE_PRODUCT_FROM_BAG":
            return {
                ...state,
                bagStore: state.bagStore.filter(it => it.id !== action.id)

            }
        case "bagReducer/ADD_TOTAL_TO_BAG":
            return {
                ...state,
                total: state.total + action.number
            }
        case "bagReducer/DELETE_SUM_FROM_BAG":
            return {
                ...state,
                total: state.total - action.number
            }
    }
    return state
}

export interface IBagStoreItem {
    id: string
    name: string,
    amount: number,
    price: number

}
