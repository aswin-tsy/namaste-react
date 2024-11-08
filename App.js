import React from "react";
import ReactDOM from 'react-dom/client';


const Header = () =>{
    return(

        <div className="header">
            <div className="logo-container">
                <img src="https://designlogo6.wordpress.com/wp-content/uploads/2023/03/fast-food-logo-design-inspiration-7.jpg?w=500" className="logo"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>

        </div>
    )
}

        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(<AppLayout/>);