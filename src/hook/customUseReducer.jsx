import { useReducer } from 'react'

export default function customUseReducer(reducer, initialvalue) {

    const [state, dispatch] = useReducer(reducer, initialvalue);

    return { state, dispatch }
}
