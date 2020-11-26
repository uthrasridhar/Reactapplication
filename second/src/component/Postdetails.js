import React from 'react'

const Postdetails = (props) => {
    console.log(props.match.params.topic)
    return (

        <div className="panel panel-success">
            <div className="panel-heading">
            <h3>Postdetails Page</h3>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                 <p>{props.match.params.topic} In order to receive the params props match params topic is used.Page used route and link component to render this page without reloading the entire webpage.This is the second sample application</p>
                </div>
            </div>

        </div>
    )
}

export default Postdetails;