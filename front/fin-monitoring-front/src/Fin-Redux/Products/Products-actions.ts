import {baseThunkType, InferActionsTypes} from "../store";
import {IIngredient, IIngredientAPI, ingredientsAPI} from "../../Fin-Requests/Ingredients-API";
import {IProducts, ISubProduct} from "./Products-reduser";


export type ingredientsActionsType = InferActionsTypes<typeof productsActions>
//

export const productsActions = {

    getProducts: (products:  Array<ISubProduct>) => ({
        type: "productsReducer/GET_PRODUCTS",
        products
    } as const)
};
// }


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<ingredientsActionsType>




