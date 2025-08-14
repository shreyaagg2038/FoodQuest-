import React from 'react';

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            count:0,
            count1:1,
        }

    }
    render(){
        const {name,location,designation} = this.props;
        const {count,count1} =this.state;
        return(
            <div style={{margin:"10px",padding:"10px",border:"solid black"}}>
                <h1>Count:{count}</h1>
                <button onClick={()=>{
                    this.setState({count: this.state.count+1});
                }}>Increase Count</button>
                <h1>Count1:{count1}</h1>
                <button onClick={()=>{
                    this.setState({count1: this.state.count1+1});
                }}>Increase Count</button>
                <h1>{name}</h1>
                <h3>{location}</h3>
                <h3>{designation}</h3>
            </div>
        )
    }
}

export default UserClass;