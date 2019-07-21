import React, { Component } from 'react';
import api from '../../services/api';

import './styles.css';
export default class Detalhe extends Component {
    state = {
        post: {},
    }

    async componentDidMount() {
        const { id } = this.props.match.params;

        const response = await api.get(`/posts`)
        const { data } = response;
        const post = data[id - 1];
        this.setState({ post })
    }
    render() {
        const { post } = this.state;
        return (
            <div className="post-info">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
                <a href="www.github.com">Clique aqui</a>
            </div>
        )
    }
}