import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                    <p className="navbar-brand" onClick={()=>{this.props.history.push('/')}}>YooBoard</p>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item nav-link" onClick={()=>{this.props.history.push('/free')}}>자유</li>
                            <li className="nav-item nav-link" onClick={()=>{this.props.history.push('/about')}}>유머</li>
                            <li className="nav-item nav-link" onClick={()=>{this.props.history.push('/hobby')}}>취미</li>
                            <li className="nav-item nav-link" onClick={()=>{this.props.history.push('/politics')}}>정치</li>
                            <li className="nav-item nav-link" onClick={()=>{this.props.history.push('/news')}}>뉴스</li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
