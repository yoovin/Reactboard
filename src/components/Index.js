import React, { Component } from 'react'

export default class Index extends Component {

    showIndex = () => {
        var pageIndex = ''
        // for(var i=0; i <= (this.props.boardsLength / 10) ; i++){
        for(var i = 0; i < (100/ 10); i++){
            pageIndex = pageIndex + <li onClick={()=>this.setState({page:i+1})}>{i+1}</li>
            console.log(pageIndex)
        }
        return pageIndex
    }

    render() {
        console.log(this.props)
        var index = []
        for(let i=0; i<(this.props.boardLength/10);i++){
            index.push(
                <li onClick={()=>this.props.changeIndex(i+1)}>{i+1}</li>
            )
        }
        // while(i < (this.props.boardLength/10)){
        //     index.push(<li onClick={()=>this.props.changeIndex(i+1)}>{i+1}</li>)
        //     i++
        // }

        console.log(index)
        return (
            <div>
                <ul>
                    {index}
                </ul>
            </div>
        )
    }
}
