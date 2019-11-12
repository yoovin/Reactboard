import React, { Component } from 'react'
import Table from '../components/Table'
import axios from 'axios'

export default class politics extends Component {
    callApi = async (cate) => {
        const response = await fetch(`http://localhost:5000/${cate}`)
        const body = await response.json()
        console.log('callApied!')
        return body
      }

    componentDidMount(){
        this.callApi(this.props.cate)
        .then(res => this.setState({boards:res}))
        .catch(err => console.log(err))

        axios.get('http://localhost:5000/post',{
            params:{id:this.state.cate}
        })
        .then((res)=>console.log(res))
        .catch(err=>console.log(err))
    }

    constructor(props){
        super(props)
            this.state = {
                cate:"politics",
                boards:''
            }
        }

    render() {
        return (
            <div>
                {this.state.cate}
                <Table history={this.props.history} cate={this.state.cate} boards={this.state.boards}/>
            </div>
        )
    }
}
