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
    }

    handleBodyChange = (e) => {
        this.setState({body:e.target.value})
    }

    handleAddButton = () => {
        this.addPost()
        .then((res)=>{
            if(res.data.result === 1){
                this.props.history.push(`/${this.state.cate}`)
            }else{
                console.log(res.data)
            }
        })
    }


    render() {
        return (
            <div>
                <input 
                name="title" type="text" 
                value={this.state.title}
                onChange={this.handleTitleChange}
                placeholder="제목을 입력하세요"
                ></input><br/>
                <textarea
                name="body" type="text"
                value={this.state.body}
                onChange={this.handleBodyChange}
                placeholder="내용을 입력하세요"
                >
                </textarea><br/>
                <input type="button" onClick={this.handleAddButton} value="글쓰기"></input>
            </div>
        )
    }
}
