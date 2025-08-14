import React from 'react';
import Contact from './Contact'

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
            resInfo:{
                name:"dummy",
                location:"inida",
            }
        }
        console.log("Child Constructor");

    }

    async componentDidMount(){
        console.log( "Child Did Mount");
        const data = await fetch("https://api.github.com/users/shreyaagg2038");
        const json = await data.json();
        console.log(json);
        this.setState({
            resInfo:json
        })
    }


    componentDidUpdate(){
        console.log( "Child Did Update");
    }

    componentWillUnmount(){
        console.log( "Child unmounted");     
    }
    
    render(){
        console.log("Child Render");
        const {name,location} = this.state.resInfo;

        return(
            <div style={{margin:"10px",padding:"10px",border:"solid black"}}>
                <h1>{name}</h1>
                <h3>{location}</h3>
            </div>
        )
    }
}

export default UserClass;