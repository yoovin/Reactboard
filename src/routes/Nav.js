import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <div>
                <h1 onClick={()=>{this.props.history.push("/")}}>YooBoard</h1>
            </div>
        )
    }
}
