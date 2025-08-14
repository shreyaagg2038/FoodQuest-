const User=(props)=>{
    return (
        <div style={{margin:"10px",padding:"10px",border:"solid black"}}>
            <h1>{props.name}</h1>
            <h3>{props.location}</h3>
            <h3>{props.designation}</h3>
        </div>
    )
}

export default User;