import { Component } from "react";
import User from "./User";
import UserClass from "./UserClass"

class About extends Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")
    }

    componentDidMount(){
        console.log("Parent did Mount")
    }

    render(){
        console.log("Parent Render")
        return (
            <div><h1>About Us Page</h1>
            <UserClass name="Shreya class" location="Ambala Cantt class" designation="Software Engineer class"/>
            </div>
        )
    }
}
export default About;