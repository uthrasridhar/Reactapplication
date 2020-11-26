import React from 'react';

//Values of props cant be changes here can change the props value only where it is passes(In this case from App component from index.js)

const Footer = (props) =>{
    return(
        <div>
            <hr/>
            <center>
    <h3>&copy; Learningreact {props.year} {props.month}</h3>
            </center>
        </div>
    )
}

export default Footer;