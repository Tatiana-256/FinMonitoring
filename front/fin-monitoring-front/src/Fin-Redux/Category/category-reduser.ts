import {categoryActionsType} from "./Category-actions";

export type initialStateType = typeof initialState
const initialState = {
    category: [] as Array<ICategory>
};

export interface ICategory {
    id: string
    categoryName: string,

}

export const categoryReducer = (state = initialState, action: categoryActionsType): initialStateType => {
    switch (action.type) {
        case "categoryReducer/GET_CATEGORY":
            return {
                ...state,
                category: action.category
            };
        case "categoryReducer/DELETE_CATEGORY":
            return {
                ...state,
                category: state.category.filter(cat => cat.id !== action.id)
            };
        case "categoryReducer/ADD_CATEGORY":
            return {
                ...state,
                category: [...state.category, action.newCategory]
            };
        case "categoryReducer/EDIT_CATEGORY":
            return {
                ...state,
                category: state.category.map(category => {
                    if (category.id !== action.id) {
                        return category
                    } else {
                        return {...category, ...action.category}
                    }
                })
            }
    }
    return state;
};

