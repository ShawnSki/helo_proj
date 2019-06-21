import React, { Component } from 'react';
import axios from 'axios';

class Post extends Component {
    constructor() {
        super()
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        this.handleGetPosts();
    }
    // example of how I could use match to get posts from the database
    handleGetPosts = async () => {
        await axios.get(`/api/posts/${this.props.match.params.id}`)
            .then(res => {
                this.setState({
                    posts: res.data
                })
            })
    }



    render() {
       
        return (
            <div>
                <h1>Post coming soon</h1>
            </div>
        )
    }
}

export default Post;