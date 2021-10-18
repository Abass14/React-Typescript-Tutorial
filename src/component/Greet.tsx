import { type } from "os"

type GreetProps = {
    name: string, 
    noMsg: number|string,
    isLoggedIn: boolean
}

export const Greet = (props: GreetProps) =>{
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