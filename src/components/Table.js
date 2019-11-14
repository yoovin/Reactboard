import React, { Component } from 'react'

export default class Table extends Component {

    state = {
        page:1
    }

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
