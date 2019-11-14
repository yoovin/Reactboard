import React, { Component } from 'react'
import Table from '../components/Table'
import axios from 'axios'

export default class Hobby extends Component {
    state = {
        cate:"hobby",
        boards:''
    }

    historyToAdd = () => {
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
            params:{cate:this.state.cate}
        })
        .then((res)=>this.setState({boards:res.data}))
        .catch(err=>console.log(err))
    }

    render() {
        return (
            <div>
                {this.state.cate}
                <p onClick={this.historyToAdd}>Add Post</p>
                <Table history={this.props.history} cate={this.state.cate} boards={this.state.boards}/>
            </div>
        )
    }
}
