import React, { Component } from 'react'
import Table from '../components/Table'
import axios from 'axios'

export default class politics extends Component {

    state = {
        page:2,
        cate:"politics",
        boards:''
    }

    historyToAdd = (e) => {
        this.props.history.push({
        pathname:`/${this.state.cate}/write`,
        state:{
            cate:this.state.cate,
            author:"Yoovin"
            }
        })
    }

    componentDidMount(){
        axios.get('/list',{
            params:{
                cate:this.state.cate,
                page:this.state.page
            }
        })
        .then((res)=>this.setState({boards:res.data}))
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                <span onClick={this.historyToAdd}>Add Post</span>
                <Table history={this.props.history} cate={this.state.cate} boards={this.state.boards}/>
            </div>
        )
    }
}
