import React, { Component } from 'react'

export default class Post extends Component {
    componentWillMount(){
        this.setState({contents: this.props.history.location.state})
    }
    render() {
        return (
            <div>
                <h1>{this.state.contents.title}</h1>
                <h2>{this.state.contents.author}</h2>
                {this.state.contents.id}
                {this.state.contents.createdAt}
                <p>{this.state.contents.body}</p>
            </div>
        )
    }
}
