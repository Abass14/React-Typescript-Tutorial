import { type } from "os"
import React from "react"

type InputProps = {
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = (props: InputProps) =>{
    //The handleChange function can be defined here if need be and passed to onChange
    return (
        <input type='text' value={props.value} onChange={props.handleChange}/>
    )
}