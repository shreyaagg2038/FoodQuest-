import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);

    }
    render(){
        const {name,location,designation} = this.props;
        return(
            <div style={{margin:"10px",padding:"10px",border:"solid black"}}>
                <h1>{name}</h1>
                <h3>{location}</h3>
                <h3>{designation}</h3>
            </div>
        )
    }
}

export default UserClass;