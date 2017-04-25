import 'react-hot-loader/patch';
import React, { Component } from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader'
import Shell from './Core/Components/Shell/Shell';

render(React.createElement(Shell), document.getElementById('container'));
/*render( <AppContainer>
    <Shell />
  </AppContainer>, document.getElementById('container'));

if (module.hot) {
   module.hot.accept('./Core/Components/Shell/Shell.jsx', () => {
     const NextRootContainer = require('./Core/Components/Shell/Shell').default;
     render( <AppContainer>
    <Shell />
  </AppContainer>, document.getElementById('container'));
   });
}
*/