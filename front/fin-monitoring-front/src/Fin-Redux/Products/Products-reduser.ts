import {ingredientsActionsType} from "./Products-actions";
import amer from "../../common-images/americano.jpg"
import cap from '../../common-images/capuchino.jpg'
import esspresso from '../../common-images/esspresso.jpg'
import latte from '../../common-images/latte.jpg'
import mafin from '../../common-images/mafin.jpg'
import icetea from '../../common-images/icetea.jpg'

export type initialStateType = typeof initialState
const initialState = {
    products: [
        {
            name: "Hot Drinks",
            subProducts: [
                {
                    productName: "Latte",
                    img: latte
                },
                {
                    productName: "Americano",
                    img: amer

                },
                {
                    productName: "Espresso",
                    img: esspresso
                },
                {
                    productName: "Capuchino",
                    img: cap
                },

            ]
        },
        {
            name: "Cold Drinks",
            subProducts: [
                {
                    productName: "Icetea",
                    img: icetea
                }
            ]
        }

    ]
} as IProducts


export const productsReducer = (state = initialState, action: ingredientsActionsType): initialStateType => {
    switch (action.type) {
        case "productsReducer/GET_PRODUCTS":
            return {
                ...state,
                products: action.products
            };
    }
    return state;
};


export interface IProducts {
    products: Array<ISubProduct>
}

export interface IProd {
    productName: string
    img?: any
}

export interface ISubProduct {
    subProducts: Array<IProd>,
    name: string
}
