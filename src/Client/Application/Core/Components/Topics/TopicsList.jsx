import * as React from 'react';
import {Route, Link} from 'react-router-dom';
import Topic from './Topic';
import Store from './Store.js';

const Topics = React.createClass({
  getInitialState(){
    return {topics: []};
  },
  componentWillMount() {
    this.subscription = Store(data => this.setState({topics: data}));
  },
  componentWillUnmount(){
    this.subscription.unsubscribe();
  },
  render() {
      return <div>
        <h2>Topics</h2>
        <ul>
        {
          this.state.topics.map((topic, i)=> {
            return(
                <li>
                  <Link to={`${this.props.match.url}/${topic.url}`}>
                    {topic.name}
                  </Link>
                </li>
            )
          })
        }
        </ul>
        <Route path={`${this.props.match.url}/:topicId`} component={Topic}/>
        <Route exact path={this.props.match.url} render={() => (
          <h3>Please select a topic first</h3>
        )}/>
      </div>;
  }
});

export default Topics;
/*
const Topics = ({ match }) => (
  <div>
    <h2>Topics</h2>
    <ul>
      {
        data.map((topic, i) => {
          return(
            <li>
            <Link key={i} to={`${match.url}/${topic.url}`}>
              {topic.name}
            </Link>
            </li>
          )
        })
      }
    </ul>

    <Route path={`${match.url}/:topicId`} component={Topic}/>
    <Route exact path={match.url} render={() => (
      <h3>Please select a topic.</h3>
    )}/>
  </div>
);

export default Topics;
*/
