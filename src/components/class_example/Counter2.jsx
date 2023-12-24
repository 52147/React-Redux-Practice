import React from 'react';
export class Counter2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {count: 0}
    }
    render(){
        return(
            <div>
                <p>You clicked {this.state.count} times</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Click Me
                </button>
            </div>
        )
    }
}
