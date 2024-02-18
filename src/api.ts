import { AppState } from "./state/AppStateContext";

export const save = async (payload: AppState) => {
    try {
        const result = await fetch(`${process.env.REACT_APP_BACKEND_ENDPOINT}/save`, {
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