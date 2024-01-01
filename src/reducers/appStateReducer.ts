import { Action, ActionType, AddTaskAction } from "../state/actions";
import { AppState, List } from "../state/AppStateContext";

export default function appReducer(state: AppState, action: Action): AppState {
   switch(action.type) {
     case ActionType.ADD_LIST:
        return {
            ...state,
            lists: [...state.lists, { text: action.payload, id: Math.random().toString()}]
        }
    case ActionType.ADD_TASK:
        const { text, listId } = (action as AddTaskAction)?.payload
        return {
            ...state,
            lists: state.lists.map((list: List) => {
                if (list.id === listId) {
                    return {
                        ...list,
                        tasks: list?.tasks ? [...list.tasks, { text, listId, id: Math.random().toString()}] : []
                    }
                }
                return list
            })
        }
   }
}