import { type } from "os"

type StatusProps = {
    status: string
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
            <h2>Loading..</h2>
            <h2>Data Fetched Successfully</h2>
            <h2>Error Fetching Data</h2>
        </div>
    )
}