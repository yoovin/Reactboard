import React, { Component } from 'react'
import axios from 'axios'

export default class Post extends Component {

    state = {
        contents:'',
        mode:1, // 1 is Reading mode
        title:'',
        body:''
    }

    changeRWMode = () => {
        this.state.mode === 1 ? this.setState({mode:0}) : this.setState({mode:1})
    }

    handleTitleChange = (e) => {
        this.setState({title:e.target.value})
    }

    handleBodyChange = (e) => {
        this.setState({body:e.target.value})
    }

    handleChangeButton = async () => {
        await this.changePost()
        await this.changeRWMode()
        await this.getPost()
    }

    getPost = () =>{
        axios.get('/getpost',{
            params:{
                id:this.props.match.params.postId,
                cate:this.props.match.params.cate
            }
        })
        .then((res)=>{
            this.setState({contents:res.data[0]})
        })
        .then(
            (res) => this.setState({body:this.state.contents.body, title:this.state.contents.title})
        )
        .catch(err=>console.log(err))
    }

    changePost = () => {
        return axios({
            method:'post',
            url:'/changePost',
            data:{
                id:this.state.contents.id,
                cate:this.state.contents.cate,
                title:this.state.title,
                body:this.state.body
            }
        })
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
    }

    componentWillMount(){
        this.getPost()
    }


    render() {
        if(this.state.mode === 1){
            return(
                <div>
                    <h1>{this.state.contents.title}</h1>
                    <h2>{this.state.contents.author}</h2>
                    {this.state.contents.id}
                    {this.state.contents.createdAt}
                    <p>{this.state.contents.body}</p>
                    <br/>
                    <span onClick={this.changeRWMode}>글 수정</span>
                </div>
            )
        }else{
            console.log(this.state.title)
            console.log(this.state.body)
            return (
                <div>
                    <input 
                    name="title" type="text" 
                    value={this.state.title}
                    onChange={this.handleTitleChange}
                    ></input><br/>
                    <h2>{this.state.contents.author}</h2>
                    {this.state.contents.id}
                    {this.state.contents.createdAt}
                    <br/>
                    <textarea
                    name="body" type="text"
                    value={this.state.body}
                    onChange={this.handleBodyChange}
                    >
                    </textarea><br/>
                    <input type="button" onClick={this.changeRWMode} value="취소"></input>
                    <input type="button" onClick={this.handleChangeButton} value="수정하기"></input>
                </div>
            )
        }
    }
}
