import {ingredientsActionsType} from "./Products-actions";
import amer from "../../common-images/americano.jpg"
import cap from '../../common-images/capuchino.jpg'
import esspresso from '../../common-images/esspresso.jpg'
import latte from '../../common-images/latte.jpg'
import mafin from '../../common-images/mafin.jpg'
import icetea from '../../common-images/icetea.jpg'
import cold from '../../common-images/cold-drinks.jpg'
import hot from '../../common-images/hot-drinks.jpg'
import hotdog from '../../common-images/hot-dog.jpg'
import food from '../../common-images/food.jpg'

export type initialStateType = typeof initialState
const initialState = {
    products: [
        {
            id: "",
            name: "Hot Drinks",
            subProducts: [
                {
                    id: "",
                    productName: "Latte",
                    price: 12,
                    img: latte
                },
                {
                    id: '',
                    productName: "Americano",
                    img: amer,
                    price: 12,

                },
                {
                    id: '',
                    productName: "Espresso",
                    img: esspresso,
                    price: 12,
                },
                {
                    id: '',
                    productName: "Capuchino",
                    img: cap,
                    price: 12,
                },

            ],
            img: cold
        },
        {
            id: '',
            name: "Cold Drinks",
            subProducts: [
                {
                    id: '',
                    productName: "Icetea",
                    img: icetea,
                    price: 12,

                }
            ],
            img: hot
        },
        {
            id: '',
            name: "Food",
            subProducts: [
                {
                    id: '',
                    productName: "Hot-dog",
                    img: hotdog,
                    price: 12,
                }
            ],
            img: food
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
    id: string
    productName: string
    img?: string,
    price: number

}

export interface ISubProduct {
    id: string,
    name: string,
    subProducts: Array<IProd>,
    img: string
}
