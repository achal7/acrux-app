import React, { Component } from 'react';
import TodosList from './TodosList.jsx';

export default class TodoComponent extends Component {
    state = { todos: [] }

    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        this.subscription = this.props.actions.subscribe(state => this.setState({todos:state.payload}));
    }
    
    componentWillUnmount(){
        this.subscription.unsubscribe();
    }
    
    render() {
        return (
            <div>
                <button value="Refresh" onClick={() => {this.props.actions[0](this.state)}}>Refresh</button> 
                <TodosList {...this.state} />
            </div>            
        );
    }
};
