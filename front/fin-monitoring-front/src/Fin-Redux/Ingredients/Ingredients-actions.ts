import {baseThunkType, InferActionsTypes} from "../store";
import {IIngredient, IIngredientAPI, ingredientsAPI} from "../../Fin-Requests/Ingredients-API";


export type ingredientsActionsType = InferActionsTypes<typeof ingredientsActions>
//

export const ingredientsActions = {

    getIngredients: (ingredients: Array<IIngredient>) => ({
        type: "ingredientsReducer/GET_INGREDIENTS",
        ingredients
    } as const),
    deleteIngredient: (id: string) => ({type: "ingredientsReducer/delete_INGREDIENTS", id} as const),
    editIngredient: (id: string, newIngredient: IIngredient) => ({
        type: "ingredientsReducer/EDIT_INGREDIENTS",
        id,
        newIngredient
    } as const),
    addIngredient: (newIngredient: IIngredient) => ({
        type: "ingredientsReducer/ADD_INGREDIENT",
        newIngredient
    } as const),
};
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
export const editIngredient = (id: string, ingredient: IIngredient): thunkType => async (dispatch) => {
    debugger
    let result = await ingredientsAPI.editIngredient(id, ingredient)
    if (result === "") {
        dispatch(ingredientsActions.editIngredient(id, ingredient))
    }
};

export const addNewIngredient = (ingredient: IIngredientAPI): thunkType => async (dispatch) => {
    let result = await ingredientsAPI.addIngredient(ingredient)
    if (result) {
        dispatch(ingredientsActions.addIngredient(result))
    }
}




