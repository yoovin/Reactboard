import React, { Component } from 'react'
import Table from '../components/Table'
import axios from 'axios'
import Index from '../components/Index'

export default class Free extends Component {

    state = {
        page:1,
        cate:"free",
        boards:''
    }

    historyToAdd = (e) => {
        this.props.history.push({
        pathname:`/${this.state.cate}/write`,
        state:{
            cate:this.state.cate
            }
        })
    }

    componentWillMount(){
        axios.get('/list',{
            params:{
                cate:this.state.cate,
                page:this.state.page
            }
        })
        .then((res)=>this.setState({boards:res.data}))
        .catch(err=>console.log(err))
    }
    
    changeIndex = (page) => {
        this.setState({page:page})
    }

    render() {
        var page = this.state.page
        return (
            <div>
                <span onClick={this.historyToAdd}>Add Post</span>
                <Table history={this.props.history} cate={this.state.cate} boards={this.state.boards.slice(10*(page-1), 10*page)}/>
                <Index changeIndex={this.changeIndex} page={this.state.page} boardLength={this.state.boards.length}/>
            </div>
        )
    }
}
