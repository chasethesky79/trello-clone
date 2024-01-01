import { createContext, Dispatch, FunctionComponent, useReducer } from 'react'
import appStateReducer from '../reducers/appStateReducer'
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
}

const appData: AppState = {
    lists: [
        { 
            id: '0',
            text: 'To Do',
            tasks: [{ id: 'c0', text: 'Generate App Scaffold' }]
        },
        { 
            id: '1',
            text: 'In Progress',
            tasks: [{ id: 'c1', text: 'Learn TypeScript' }]
        },
        { 
            id: '2',
            text: 'Done',
            tasks: [{ id: 'c2', text: 'Begin to use static typing' }]
        }
    ]
}

interface Props {
    children: React.ReactNode;
  }

type AppStateContextProps = {
    lists: List[],
    getTasksByListId: (listId: string) => Task[],
    dispatch: Dispatch<Action>
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
export const AppStateProvider: FunctionComponent<Props> = ({ children }) => {
    const[state, dispatch] = useReducer(appStateReducer, appData)
    const { lists } = state
    const getTasksByListId = (listId: string) => lists.find(list => list.id === listId)?.tasks ?? []
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>{children}</AppStateContext.Provider>
    )
}