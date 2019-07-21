import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

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
        const { posts } = this.state;
        return (
            <div className="post-list">
                {posts.map(post => (
                    <article key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                        <a href="www.google.com">Clique aqui</a>
                    </article>
                ))}
            </div>
        );
    }
}