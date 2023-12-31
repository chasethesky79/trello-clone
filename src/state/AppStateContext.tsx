import { createContext, FunctionComponent } from 'react'

type Task = {
    id: string
    text: string
}

type List = {
   id: string;
   text: string;
   tasks: Task[]
}

type AppState = {
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
    getTasksByListId: (listId: string) => Task[]
}

export const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)
export const AppStateProvider: FunctionComponent<Props> = ({ children }) => {
    const { lists } = appData
    const getTasksByListId = (listId: string) => lists.find(list => list.id === listId)?.tasks ?? []
    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId }}>{children}</AppStateContext.Provider>
    )
}