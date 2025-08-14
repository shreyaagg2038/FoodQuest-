import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count2:0
        }

    }
    render(){
        const {name,location,designation} = this.props;
        const {count,count2} =this.state;
        return(
            <div style={{margin:"10px",padding:"10px",border:"solid black"}}>
                <h1>Count:{count}</h1>
                <h1>Count2:{count2}</h1>
                <h1>{name}</h1>
                <h3>{location}</h3>
                <h3>{designation}</h3>
            </div>
        )
    }
}

export default UserClass;