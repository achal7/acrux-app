import React from 'react';
import loadAbout from 'bundle-loader?lazy!./../About';
import Bundle from './Bundle';
const AboutLoader = () => (
  <Bundle load={loadAbout}>
    {(About) => About ? <About /> : <div>Loading...</div>}
  </Bundle>
);

export default AboutLoader;