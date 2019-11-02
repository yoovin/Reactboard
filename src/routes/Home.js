import React from 'react'

class Home extends React.Component{
    render(){
        return(
            <div>
                <h1 onClick={() => {this.props.history.push('/about')}}>Go to About</h1>
                <h1>This is Home!</h1>
            </div>
        )
    }
}

export default Home