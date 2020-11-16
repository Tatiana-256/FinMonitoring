import {ingredientsActionsType} from "./Ingredients-actions";
export type initialStateType = typeof initialState
const initialState = {
    ingredients: [] as Array<IIngredients>
};

interface IIngredients {
    name: string,
    id: string

}

export const ingredientsReducer = (state = initialState, action: ingredientsActionsType): initialStateType => {
    switch (action.type) {
    }
    return state;
};



