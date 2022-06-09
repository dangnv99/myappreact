import context from "./context";
import { useReducer } from 'react'
function Provider({ children }) {
    const [state, dispatch] = useReducer()
    return (
        <context.Provider value={[state, dispatch]}>
            {children}
        </context.Provider>
    )

}