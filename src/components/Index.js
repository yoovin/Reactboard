import React, { Component } from 'react'

export default class Index extends Component {

    render() {
        var index = []
        for(let i=0; i<(this.props.boardLength/10);i++){
            index.push(
                <li onClick={()=>this.props.changeIndex(i+1)}>{i+1}</li>
            )
        }
        return (
            <div>
                <ul>
                    {index}
                </ul>
            </div>
        )
    }
}
