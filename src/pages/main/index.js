import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component {
    componentDidMount() {
        this.loadPosts();
    }

    loadPosts = async () => {
        const response = await api.get('/posts');
        const { data } = response;
        console.log(data);
    }
    render() {
        return (
            <h1>Hello Rocketset</h1>
        );
    }
}