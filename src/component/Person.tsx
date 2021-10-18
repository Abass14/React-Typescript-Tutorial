import { type } from "os"

type PersonProp = {
    name: {
        firstName: string,
        lastName: string
    }
}

export const Person = (props: PersonProp) =>{
    return (
        <div>{props.name.firstName} {props.name.lastName}</div>
    )
}