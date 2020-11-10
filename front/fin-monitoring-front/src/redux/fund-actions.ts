import {InferActionsTypes} from "./store";


export type fundActionsType = InferActionsTypes<typeof actions>

export const actions = {
    // addTaskAC: (newTask: taskType) => ({type: ADD_TASK, newTask: newTask} as const)
}
