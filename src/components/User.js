import {useState} from 'react';
const User=(props)=>{

    const[count,setCount] = useState(0);
    return (
        <div style={{margin:"10px",padding:"10px",border:"solid black"}}>
            <h1>Count:{count}</h1>
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
            <h3>{props.designation}</h3>
        </div>
    )
}

export default User;