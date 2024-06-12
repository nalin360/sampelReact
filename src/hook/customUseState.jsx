import { useState } from "react"


export default function customUseState(initialState = null) {
  
    const [value, setValue] = useState(initialState)

    return {value , setValue}
}
