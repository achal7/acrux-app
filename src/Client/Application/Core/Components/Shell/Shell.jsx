import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Container from './../Container/Container';
import Navigation from './../Navigation/Navigation';
import action from './Action';

const Shell = () => (
  <Router>
    <div>
      <Navigation />
      <Container />
    </div>
  </Router>
);

export default Shell;