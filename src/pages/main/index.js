import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    state = {
        posts: [],
    }
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/posts');
        const { data } = response;
        const posts = data.slice(0, 15);        

        this.setState({ posts })
    }
    render() {
        return (
            <div className="post-list">
                {this.state.posts.map(post => (
                    <h2 key={post.id}>{post.title}</h2>
                ))}
            </div>
        );
    }
}