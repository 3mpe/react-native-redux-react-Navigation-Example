import React, { Component } from "react";
import { Provider } from 'react-redux';


import configureStore from './../../store/configureStore';

import RouteApp from "./../route";
// import { StyleProvider } from "native-base";
// import getTheme from "../theme/components";
// import variables from "../theme/variables/commonColor";



const store = configureStore();

const RNRedux = () => (
  <Provider store={store}>
    <RouteApp />
  </Provider>
);


export default RNRedux;
