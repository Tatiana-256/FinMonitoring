import {ingredientsActionsType} from "./Ingredients-actions";
import {IIngredient} from "../../Fin-Requests/Ingredients-API";

export type initialStateType = typeof initialState
const initialState = {
    ingredients: [] as Array<IIngredient>
};


export const ingredientsReducer = (state = initialState, action: ingredientsActionsType): initialStateType => {
    switch (action.type) {
        case "ingredientsReducer/GET_INGREDIENTS":
            return {
                ...state,
                ingredients: action.ingredients
            };
        case "ingredientsReducer/delete_INGREDIENTS":
            return {
                ...state,
                ingredients: state.ingredients.filter(ing => ing.id !== action.id)
            };
        case "ingredientsReducer/EDIT_INGREDIENTS":
            debugger
            return {
                ...state,
                ingredients: state.ingredients.map(ing => {
                    if (ing.id !== action.id) {
                        return ing
                    } else {
                        return {...ing, ...action.newIngredient}
                    }
                })

            }
        case "ingredientsReducer/ADD_INGREDIENT":
            return {
                ...state,
                ingredients: [...state.ingredients, action.newIngredient]
            }
    }
    return state;
};



