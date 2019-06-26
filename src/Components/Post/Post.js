import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }


    // example of using match
  
    render() {
       console.log('props', this.props)
        return (
            <div>
                <h1>Post coming soon</h1>
                <p>My ID is {this.props.match.params.id}</p>
            </div>
        )
    }
}

export default Post;