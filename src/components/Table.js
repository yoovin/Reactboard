import React, { Component } from 'react'
// import axios from 'axios'

export default class Table extends Component {

    render() {
        console.log(this.props.boards)
        return (
            <div>
                <table>
                    <tr>
                        <th>Id</th>
                        <th>Author</th>
                        <th>Title</th>
                        <th>Created</th>
                    </tr>
                {this.props.boards ? this.props.boards.map((row)=>{
                    return(
                    <tr>
                        <td>{row.id}</td>
                        <td>{row.author}</td>
                        <td onClick={()=>this.props.history.push({
                            pathname:`/${this.props.cate}/${row.id}`,
                            state:{
                                id:row.id,
                                author:row.author,
                                title:row.title,
                                body:row.body,
                                createdAt:row.createdAt
                            }
                        })}>{row.title}</td>
                        <td>{row.createdAt}</td>
                    </tr>
                    )
                }):'Loading'}

                </table>
            </div>
        )
    }
}
