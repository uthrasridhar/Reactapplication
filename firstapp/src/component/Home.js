import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from '../db.json'
import { render } from 'react-dom';
import Newslist from './Newdisplay'


//functional component (App)
//It is used to display the UI on the screen 
//In order to return more than one paramter use the wrapper (Like div,nav)  
    //Warp in one parent element (div,header,footer,nav,section)
    //Keep calling  each component in this div (Header,footer etc )
    //In function component you can pass the data but you cant define the state 
    //Passing data from App functi compon to Footer 

class Home extends Component {

constructor(props){
    super()

    this.state={
        news:JSON,
        filtered:JSON
    }
}
/*
var a = [1,2,3,4]
a.filter((data) => {return data>5})

*/
filterNews(keyword){

    const output = this.state.news.filter((data) => {
       return data.title.toLowerCase().indexOf(keyword)>-1

    })
    this.setState({filtered:output})
}

render()
{
    return (
      
    <React.Fragment>
       <Header userText={(userinput) => {this.filterNews(userinput)}}/>
       <Newslist newsdata={this.state.filtered}/>
        <Footer year="2020" month="sep"/>
        </React.Fragment>
    )
} 

}


//To render use reactdom --Render App function name and then get elementid (div)  from public/index.html file 
//We are assigning only one root element for the entire application
//Our app(component name) loads on this root element (Single page application)

export default Home;
