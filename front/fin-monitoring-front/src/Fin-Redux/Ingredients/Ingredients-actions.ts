import {baseThunkType, InferActionsTypes} from "../store";
import {IIngredient, ingredientsAPI} from "../../Fin-Requests/Ingredients-API";


export type ingredientsActionsType = InferActionsTypes<typeof ingredientsActions>
//

export const ingredientsActions = {

    getIngredients: (ingredients: Array<IIngredient>) => ({
        type: "ingredientsReducer/GET_INGREDIENTS",
        ingredients
    } as const),
    deleteIngredient: (id: string) => ({type: "ingredientsReducer/delete_INGREDIENTS", id} as const)
};
//     addFund: (newFund: IFund) => ({type: "fundReducer/ADD_FUND", newFund} as const),
//     editFund: (id: string, newFund: IFund) => ({type: "fundReducer/EDIT_FUND", id, newFund} as const),
// }


// //_________________ thunk-creators____________________
type thunkType = baseThunkType<ingredientsActionsType>

export const getIngredients = (): thunkType => async (dispatch) => {
    let result = await ingredientsAPI.getIngredients()
    if (result) {
        dispatch(ingredientsActions.getIngredients(result))
    }
};


export const deleteIngredient = (id: string): thunkType => async (dispatch) => {
    let result = await ingredientsAPI.deleteIngredient(id)
    if (result) {
        dispatch(ingredientsActions.deleteIngredient(id))
    }
};
