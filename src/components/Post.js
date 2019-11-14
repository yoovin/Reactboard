import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {

    state = {
        contents:''
    }

    componentWillMount(){
        axios.get('/getpost',{
            params:{
                id:this.props.match.params.postId,
                cate:this.props.match.params.cate
            }
        })
        .then((res)=>{
            this.setState({contents:res.data[0]})
        })
        .catch(err=>console.log(err))
    }


    render() {
        return (
            <div>
                <h1>{this.state.contents.title}</h1>
                <h2>{this.state.contents.author}</h2>
                {this.state.contents.id}
                {this.state.contents.createdAt}
                <p>{this.state.contents.body}</p>
                <br/>
                <span>수정</span>
            </div>
        )
    }
}
