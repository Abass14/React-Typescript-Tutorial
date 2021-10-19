import { type } from "os"

type StatusProps = {
    status: 'loading'|'success'|'error'  //using string literals
}
export const Status = (props: StatusProps) => {
    let message
    if(props.status === 'loading'){
        message = 'Loading..'
    }else if(props.status === 'success'){
        message = 'Data Fetched Successfully'
    }else{
        message = 'Error Fetching Data'
    }
    return (
        <div>
            <h2>{message}</h2>
        </div>
    )
}