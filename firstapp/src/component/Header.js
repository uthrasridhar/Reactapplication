import React ,{Component}from 'react';
import './Header.css' 
//React.Fragment is the wrapper element so it removes all the div 
//Instaed of multiple div use this react.Fragment
//Dont use both react.fragment and div no use 

class Header extends Component{

    //component class has constructor 
    constructor(){
       //It helps to inheriate the property from parent class
        super()
        //Can declare multiple variable(State is the local variable)
        this.state ={
            title:'React first App',
            keyword:'User text here'
        }

    }
    //This is method to enter the value in text box 
    //If we type "gggh" in text it shows this ggh below that 
    //event.target.value to get the value in the text box 

    handlechange =(event) => {
        this.setState({keyword:event.target.value?event.target.value:"User text here"})
        this.props.userText(event.target.value);
    }
    //to return from class you need method render 
    render(){
        //How to define css 
        
        return(
        <React.Fragment>
            <header>
            <center>
             <div className="logo">{this.state.title}</div>
             <input type = "text" onChange={this.handlechange}></input>
              <p>{this.state.keyword}</p>
            </center>
      
        </header>
        </React.Fragment>
        )
    }

}


//Only first component in index.js we use render for other components use export 
export default Header;