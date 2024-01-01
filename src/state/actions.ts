export enum ActionType {
    ADD_TASK = 'ADD_TASK',
    ADD_LIST = 'ADD_LIST'
}

export interface AddListAction {
    type: ActionType.ADD_LIST,
    payload: string
}

export interface AddTaskAction {
    type: ActionType.ADD_TASK,
    payload: { text: string, listId: string }
}

export type Action = AddListAction | AddTaskAction

const addTask = (text: string, listId: string): Action => ({ type: ActionType.ADD_TASK, payload: { text, listId }})
const addList = (text: string): Action => ({ type: ActionType.ADD_LIST, payload: text })

export { addList, addTask }