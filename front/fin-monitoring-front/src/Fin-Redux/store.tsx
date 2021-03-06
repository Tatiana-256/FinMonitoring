import {createStore, Action, combineReducers, applyMiddleware} from "redux";
import {ThunkAction} from "redux-thunk";
import thunkMiddleware from "redux-thunk"
import {ingredientsReducer} from "./Ingredients/Ingredients-reduser";
import {categoryReducer} from "./Category/category-reduser";
import {productsReducer} from "./Products/Products-reduser";
import {bagReducer} from "./Bag-Store/BagStore-reduser";


let reducers = combineReducers({
    ingredients: ingredientsReducer,
    category: categoryReducer,
    products: productsReducer,
    bagItems: bagReducer
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store;


// ______type of state___________

type RootReducerType = typeof reducers
export type AppStateType = ReturnType<RootReducerType>

// ______type of actions___________

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never
export type InferActionsTypes<T extends { [key: string]: (...args: any[]) => any }> = ReturnType<PropertiesType<T>>


// ______type of thunk-creator___________

export type baseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

