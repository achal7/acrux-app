import React, { Component } from 'react';
import TodosList from './TodosList.jsx';

export default class TodoComponent extends Component {
    state = { todos: [] }

    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        this.subscription = this.props.actions.subscribe(state => this.setState(state));
    }
    
    componentWillUnmount(){
        this.subscription.unsubscribe();
    }
    
    render() {
        return (
            <div>
                <button value="Refresh" onClick={() => {this.props.actions.refresh(this.state.todos)}}>Refresh</button> 
                <TodosList {...this.state} />
            </div>            
        );
    }
};
