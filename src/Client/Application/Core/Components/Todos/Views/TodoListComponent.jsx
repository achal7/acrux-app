import React, { Component } from 'react';
import TodosList from './TodosList';

export default class TodoListComponent extends Component {
    state = { todos: [] }

    constructor(props){
        super(props);
    }
    
    componentWillMount() {
        this.subscription = this.props.stream.subscribe(state => this.setState(state));
    }
    
    componentWillUnmount(){
        this.subscription.unsubscribe();
    }
    
    render() {
        return (
            <div>
                <button value="Refresh" onClick={() => {this.props.actions.DoRefresh(this.state.todos)}}>Refresh</button> 
                <TodosList {...this.state} />
            </div>            
        );
    }
};
