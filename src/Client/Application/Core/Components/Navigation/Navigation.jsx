import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const Navigation = () => (
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/counter">Counter</Link></li>
        <li><Link to="/name">Name</Link></li>
        <li><Link to="/todos">Todos</Link></li>
        <li><Link to="/topics">Topics</Link></li>
        <li><Link to="/weather">Weather</Link></li>
        <li><Link to="/orders">Orders</Link></li>
    </ul>
);

export default Navigation;