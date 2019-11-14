import React, { Component } from 'react'
import axios from 'axios'

export default class Write extends Component {

    state = {
        cate:this.props.history.location.state.cate,
        author:this.props.history.location.state.author,
        title:'',
        body:''
    }

    addPost = () => {
        return axios({
            method:'post',
            url:'/post',
            data:{
                cate:this.state.cate,
                author:this.state.author,
                title:this.state.title,
                body:this.state.body
            }
        })
    }

    handleTitleChange = (e) => {
        this.setState({title:e.target.value})
        // console.log(this.state.title)
    }

    handleBodyChange = (e) => {
        this.setState({body:e.target.value})
        // console.log(this.state.body)
    }

    handleAddButton = () => {
        this.addPost()
        .then((res)=>{
            console.log(res.data)
        })
    }


    render() {
        console.log(this.props.history.location.state)
        return (
            <div>
                <input 
                name="title" type="text" 
                value={this.state.title}
                onChange={this.handleTitleChange}
                placeholder="제목을 입력하세요"
                ></input><br/>
                <input
                name="body" type="text"
                value={this.state.body}
                onChange={this.handleBodyChange}
                placeholder="내용을 입력하세요"
                >
                </input><br/>
                <input type="button" onClick={this.handleAddButton} value="글쓰기"></input>
            </div>
        )
    }
}
