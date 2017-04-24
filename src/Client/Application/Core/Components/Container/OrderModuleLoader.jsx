import React from 'react';
import loadAbout from 'bundle-loader?lazy&name=OrderModule!./../../../OrderModule/OrderModule';
import Bundle from './Bundle';

const OrderModuleLoader = () => (
  <Bundle load={loadAbout}>
    {(OrderModule) => OrderModule ? <OrderModule /> : <div>Loading...</div>}
  </Bundle>
);

export default OrderModuleLoader;