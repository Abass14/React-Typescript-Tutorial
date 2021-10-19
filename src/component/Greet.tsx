import { type } from "os"

type GreetProps = {
    name: string, 
    noMsg?: number|string, //making noMsg optional
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) =>{
    const { noMsg = 5 } = props //destructuring noMsg and passing a default value
    return (
        <div>
            <h2>
                {
                props.isLoggedIn? `Welcome ${props.name}, we have ${props.noMsg} unread messages` :
                'Welcome Guest'
                }
             </h2>
        </div>
    )
}