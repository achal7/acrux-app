import React from 'react';  
import ReactDOM from 'react-dom';  
import { Subject } from 'rxjs/Subject';

// create our stream as a subject so arbitrary data can be sent on the stream
const action$ = new Subject();

// Initial State
const initState = { name: 'Harry' };

// Redux reducer
const reducer = (state, action) => {  
  switch(action.type) {
    case 'NAME_CHANGED':
      return {
        ...state,
        name: action.payload
      };
    default:
      return state;
  }
}

// Reduxification
const store$ = action$  
    .startWith(initState)
    .scan(reducer);

// Higher order function to send actions to the stream
const actionDispatcher = (func) => (...args) =>  
  action$.next(func(...args));

// Example action function
const changeName = actionDispatcher((payload) => ({  
  type: 'NAME_CHANGED',
  payload
}));

// React view component 
const App = (props) => {  
  const { name } = props;
  return (
    <div>
      <h1>{ name }</h1>
      <button onClick={() => changeName('Harry')} >Harry</button>
      <button onClick={() => changeName('Sally')} >Sally</button>
    </div>
  );
}

const NameContainer = React.createClass({
    getInitialState(){
        return {};
    },
    componentWillMount() {
        this.subscription = store$.subscribe(state => this.setState(state));
    },
    componentWillUnmount(){
        this.subscription.unsubscribe();
    },
    render() {
        return (
            <App {...this.state} />
        );
    }
});

export default NameContainer;

