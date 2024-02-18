import { Action, ActionType, AddTaskAction } from "../state/actions";
import { AppState, List, Task } from "../state/AppStateContext";
import { nanoid } from 'nanoid'
import { findItemIndexById, moveItem } from "../utils/arrayUtils";
import { DragItem } from "../DragItem";

export default function appStateReducer(state: AppState, action: Action): AppState {
   switch(action.type) {
     case ActionType.ADD_LIST:
        return {
            ...state,
            lists: [...state.lists, { text: action.payload, id: nanoid(), tasks: []}]
        }
    case ActionType.ADD_TASK:
        const { text, listId } = (action as AddTaskAction)?.payload
        return {
            ...state,
            lists: state.lists.map((list: List) => {
                if (list.id === listId) {
                    return {
                        ...list,
                        tasks: [...list.tasks as Task[], { text, listId, id: nanoid()}]
                    }
                }
                return list
            })
        }
    case ActionType.MOVE_LIST:
        const { draggedId, hoverId } = action.payload
        const draggedIndex = findItemIndexById(state.lists, draggedId)
        const hoverIndex = findItemIndexById(state.lists, hoverId)
        return {
            ...state,
            lists: moveItem([...state.lists], draggedIndex, hoverIndex)
        }
    case ActionType.SET_DRAGGED_ITEM:
        return {
            ...state,
            draggedItem: action.payload
        }
   }
}
