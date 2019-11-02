import React from 'react'

class About extends React.Component{
    componentDidMount(){
        console.log('hello')
    }
    render(){
        return(
            <div>
                <h1 onClick={()=>{this.props.history.push('/')}}>go Home use history</h1>
                <h1><a href="/">Home</a></h1>
                <h2>This is About!</h2>
            </div>
        )
    }
}

export default About