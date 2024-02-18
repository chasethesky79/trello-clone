import { createContext, Dispatch, useEffect, useReducer } from 'react'
import { save } from '../api'
import { DragItem } from '../DragItem'
import appStateReducer from '../reducers/appStateReducer'
import { withInitialState } from '../withInitialState'
import { Action } from './actions'

export type Task = {
    id: string
    text: string
}

export type List = {
   id: string;
   text: string;
   tasks?: Task[]
}

export type AppState = {
    lists: List[]
    draggedItem: DragItem | null
}

interface AppStateProviderProps {
    children: React.ReactNode;
    initialState: AppState
  }

type AppStateContextProps = {
    lists: List[],
    getTasksByListId: (listId: string) => Task[],
    dispatch: Dispatch<Action>,
    draggedItem: DragItem | null
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
export const AppStateProvider = withInitialState<AppStateProviderProps>(
    ({ children, initialState }) => {
    const[state, dispatch] = useReducer(appStateReducer, initialState)
    const getTasksByListId = (listId: string) => state?.lists.find(list => list.id === listId)?.tasks ?? []
    const lists = state ? state.lists : []
    const draggedItem = state ? state.draggedItem : null
    useEffect(() => {
        save(state)
    }, [state])
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch, draggedItem }}>{children}</AppStateContext.Provider>
    )
  }
)