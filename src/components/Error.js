import { useRouteError } from "react-router";
const Error =()=>{
    const err= useRouteError();
    console.log(err);
    return (
        <div>
            <h1>OOPS!! Something went wrong !!!!!!!!!!</h1>
            <h2>{err.status} {err.statusText}</h2>
        </div>
    )
}

export default Error;