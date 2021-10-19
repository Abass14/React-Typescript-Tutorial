import { type } from "os"
import React from "react"

type InputProps = {  //prop types can be exported and imported from another file
    value: string,
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}
export const Input = ({ value, handleChange}: InputProps) =>{  //prop destructured
    //The handleChange function can be defined here if need be and passed to onChange
    return (
        <input type='text' value={value} onChange={handleChange}/>
    )
}