import {bagActionsType} from "./Bag-Store-actions";
import dd from '../../common-images/latte.jpg'

export type initialStateType = typeof initialState
const initialState = {
    bagStore: [
        {
            id: '',
            name: 'Latte',
            amount: 1,
            price: 12
        },
        {
            id: '',
            name: 'Capuchino',
            amount: 1,
            price: 16
        }
    ] as Array<IBagStoreItem>
};


export const bagReducer = (state = initialState, action: bagActionsType): initialStateType => {
    switch (action.type) {
    }
    return state
}

export interface IBagStoreItem {
    id: string
    name: string,
    amount: number,
    price: number

}
