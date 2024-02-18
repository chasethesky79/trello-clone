import { useEffect, useState } from "react"
import { AppState } from "./state/AppStateContext"
import { DragItem } from '../src/DragItem'
import { load } from "./api"

type InjectedProps = {
    initialState: AppState
}

type PropsWithoutInjected<TBaseProps> = Omit<TBaseProps, keyof InjectedProps>

export function withInitialState<TProps>(WrappedComponent: React.ComponentType<PropsWithoutInjected<TProps> & InjectedProps>){
    return (props: PropsWithoutInjected<TProps>) => {
        const [initialState, setInitialState] = useState<AppState>({
            draggedItem: null,
            lists: []
        })
        const [loading, setLoading] = useState(true)
        const [error, setError] = useState<Error | undefined>()
        useEffect(() => {
            const fetchInitialState = async () => {
                try {
                  setInitialState(await load())
                  setLoading(false)
                } catch(e) {
                    setLoading(false)
                    if (e instanceof Error) {
                        setError(e)
                    }
                    console.error(`ERROR LOADING DATA`)
                }
              }
              fetchInitialState();
        }, [])
        if (loading) {
            return <div>Loading...</div>
        }
        if (error) {
            return <div>{error?.message}</div>
        }
        return <WrappedComponent {...props} initialState={initialState}/>
    }
}