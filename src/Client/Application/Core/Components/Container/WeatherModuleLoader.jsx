import React from 'react';
import loadWeather from 'bundle-loader?lazy&name=OrderModule!./../../../WeatherModule/Weather';
import Bundle from './Bundle';

const WeatherModuleLoader = () => (
  <Bundle load={loadWeather}>
    {(WeatherModule) => WeatherModule ? <WeatherModule /> : <div>Loading...</div>}
  </Bundle>
);

export default WeatherModuleLoader;