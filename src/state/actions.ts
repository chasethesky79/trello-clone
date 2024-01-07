export enum ActionType {
    ADD_TASK = 'ADD_TASK',
    ADD_LIST = 'ADD_LIST',
    MOVE_LIST = 'MOVE_LIST'
}

export interface AddListAction {
    type: ActionType.ADD_LIST,
    payload: string
}

export interface AddTaskAction {
    type: ActionType.ADD_TASK,
    payload: { text: string, listId: string }
}

export interface MoveListAction {
    type: ActionType.MOVE_LIST,
    payload: { draggedId: string, hoverId: string }
}

export type Action = AddListAction | AddTaskAction | MoveListAction

const addTask = (text: string, listId: string): Action => ({ type: ActionType.ADD_TASK, payload: { text, listId }})
const addList = (text: string): Action => ({ type: ActionType.ADD_LIST, payload: text })
const moveList = (draggedId: string, hoverId: string) => ({ type: ActionType.MOVE_LIST, payload: { draggedId, hoverId }})

export { addList, addTask, moveList }