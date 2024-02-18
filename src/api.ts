import { AppState } from "./state/AppStateContext";

const backendEndPoint = process.env.REACT_APP_BACKEND_ENDPOINT
export const save = async (payload: AppState) => {
    try {
        const result = await fetch(`${backendEndPoint}/save`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
        return await result.json()
    } catch (err: any) {
        console.log(`ERROR WHEN SAVING PAYLOAD ${JSON.stringify(payload)}`)
    }
}

export const load = async () => {
    try {
        const result = await fetch(`${backendEndPoint}/load`)
        return await result.json()
    } catch (err: any) {
        console.log(`ERROR WHEN LOADING DATA`)
    }
}