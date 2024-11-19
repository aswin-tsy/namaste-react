import React from "react";

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            count : 0,
            count1 :1,
        }
        console.log(this.props.name + 'child constructor')

    }
    componentDidMount(){
        console.log(this.props.name + 'child did mount')
    }

    render(){
        console.log(this.props.name + 'child render')
        return(
            <div>
                <div>Name: {this.props.name} </div>
                <button onClick={()=>{
                    this.setState({
                        count: this.state.count+1,
                    })
                }}>Count</button>
                <div>Count: {this.state.count} </div>
                <div>Place: {this.props.place} </div>
            </div>
        )
    }
}

export default UserClass;