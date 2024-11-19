import UserClass from "./UserClass";
import React from 'react';


class About extends React.Component {
    constructor(){
        super()
        console.log('Parent constructor');
    }

    componentDidMount(){
        console.log('parent did mount')
    }
  render() {
    console.log('parent render')
    return(
        <div>
            <h1>About page</h1>
            <h2>This is my about page</h2>
            <UserClass name = {"Aswin"} place = {"Calicut"}/>
            <UserClass name = {"sarth"} place = {"Calicut"}/>
        </div>
    )
 }
}

export default About;