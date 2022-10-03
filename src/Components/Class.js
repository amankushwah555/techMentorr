import React, { Component } from 'react';

class Class extends Component {
    render() {
        return (
            <div>
                <h1>Class Component</h1>
                <JoinUs />
                <JoinME />
            </div>
        );
    }
}

class JoinUs extends Component {
    render(){
        return(
            <h2>Join us</h2>
        )
    }
}
class JoinME extends Component {
    render(){
        return(
            <h2>Join ME</h2>
        )
    }
}

export default Class;