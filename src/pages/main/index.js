import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';

export default class Main extends Component {
    state = {
        posts: [],
        postInfo: {},
        page: 1,
    }
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async (page = 1) => {
        const response = await api.get('/posts');
        const { data } = response;
        let total = data.length || 0;
        const limit = 10, pages = total/limit;
        const posts = data.slice(page-1, limit*page);
        const postInfo = {
            total, limit, page, pages,
        }
        console.log(postInfo);

        this.setState({ posts, postInfo, page })
    }

    prevPage = () => {
        const { page } = this.state;
        if (page === 1) return;
        const pageNumber = page - 1;
        this.loadPosts(pageNumber);
    }

    nextPage = () => {
        const { page, postInfo } = this.state;

        if (page === postInfo.pages) return;
        
        const pageNumber = page + 1;

        this.loadPosts(pageNumber);
    }

    render() {
        const { posts, page, postInfo } = this.state;
        return (
            <div className="post-list">
                <div className="actions">
                    <button disabled={page === 1} onClick={this.prevPage}>Anterior</button>
                    <button disabled={page === postInfo.pages} onClick={this.nextPage}>Próximo</button>
                </div>
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