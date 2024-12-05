import UserClass from "./UserClass";
import React from 'react';


class About extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props);
        // const data = this.props.location.state
        // console.log(data, 'about');
    }

    componentDidMount(){
        console.log('parent did mount')
    }
  render() {
   
    return(
        <div>
           <div className="dark:bg-gray-800 dark:text-white">
            <h1>About page</h1>
            <h2>This is my about page</h2>
            <UserClass name = {"Aswin"} place = {"Calicut"}/>
            <UserClass name = {"sarth"} place = {"Calicut"}/>
        </div> 
        </div>
        
    )
 }
}

export default About;