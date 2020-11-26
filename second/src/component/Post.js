import React from 'react';
import {Link} from 'react-router-dom';

const Post = () => {

    return (
        <div className="panel panel-success">
            <div className="panel-heading">
            <h3>Post Page</h3>
            </div>
            <div className="panel-body">
                <div className="jumbotron">
                    <p>Post Page used route and link component to render this page without reloading the entire webpage.This is the second sample application</p>
                    <h3>Javascript</h3>
                    <Link to="/post/Javascipt">Details</Link>
                    <h3>Node</h3>
                    <Link to="/post/Node">Details</Link>
                    <h3>Yarn</h3>
                    <Link to="/post/Yarn">Details</Link>
                </div>
            </div>

        </div>
    )
}

export default Post;