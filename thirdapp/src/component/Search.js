
import React,{Component} from 'react';

const url = "https://developerfunnel.herokuapp.com/location";

class Search extends Component{
    constructor(){
        super()
        this.state={
            location:''
        }
    }
    renderCity = (data) => {

        if(data){
            return data.map((item) => {
                return (
                    <option value={item.city_name}>{item.city_name}</option>
                )
            })
        }
    }
    render(){
        return (
            <div>
                <select>
                    <option>----Select City-----</option>
                    {this.renderCity(this.state.location)}

                </select>
            </div>
        )
    }
    componentDidMount(){
        fetch(url ,{Method:'GET'})

        //Resolve the promise
        .then((res) => res.json())
        //Resolve data
        .then((data) => this.setState({location:data}));
    }



}

export default Search;