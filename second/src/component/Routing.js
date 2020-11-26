import React from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Post from './Post';
import Content from './Content';
import Profile from './Profile';
import Postdetails from './Postdetails';

const Routing = () => {
    return (
        <BrowserRouter>
     
            <Header/>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/post" component={Post}></Route>
            <Route  path="/post/:topic" component={Postdetails}></Route>
            <Route path ="/profile" component={Profile}></Route>
            <Route path ="/content" component ={Content}></Route>
            <Footer/>
   \
        </BrowserRouter>
    )
}
export default Routing;