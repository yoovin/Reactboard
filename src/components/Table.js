import React, { Component } from 'react'
import {Animated} from "react-animated-css";

export default class Table extends Component {

    state = {
        page:1
    }


    // render() {
    //     return (
    //         <div>
    //             <table>
    //                 <tr>
    //                     <th>Id</th>
    //                     <th>Author</th>
    //                     <th>Title</th>
    //                     <th>Created</th>
    //                 </tr>
    //             {this.props.boards ? this.props.boards.map((row)=>{
    //                 return(
    //                 <tr>
    //                     <td>{row.id}</td>
    //                     <td>{row.author}</td>
    //                     <td onClick={()=>this.props.history.push({
    //                         pathname:`/${this.props.cate}/post/${row.id}`,
    //                     })}>{row.title}</td>
    //                     <td>{row.createdAt}</td>
    //                 </tr>
    //                 )
    //             }):'Loading'}

    //             </table>
    //         </div>
    //     )
    // }
    render() {
        return (
            <Animated animationIn="fadeInLeft" animationOut="zoomOutDown" animationInDuration={1000} animationOutDuration={1000} isVisible={true}>
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
                            pathname:`/${this.props.cate}/post/${row.id}`,
                        })}>{row.title}</td>
                        <td>{row.createdAt}</td>
                    </tr>
                    )
                }):'Loading'}

                </table>
            </div>
            </Animated>
        )
    }
}
