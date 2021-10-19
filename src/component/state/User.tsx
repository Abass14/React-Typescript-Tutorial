import { type } from "os"
import { useState } from "react"

type AuthUser = {
    name: string,
    email: string
}
export const User = () =>{
    const [user, setUser] = useState<AuthUser | null>({} as AuthUser)  //Instead of using null, we can use the "as" keyword to assert the type of user
    const handleLogin = () =>{
        setUser({
            name: 'Abass',
            email: 'abass@gmail.com'
        })
    }
    const handleLogout = () =>{
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}