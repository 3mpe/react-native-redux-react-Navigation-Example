import React from "react";
import { Root } from "native-base";
import { StackNavigator } from "react-navigation";

import Home from './home/home';


const AppNavigator = StackNavigator(
  {
    Home: {
      screen: Home,
    },
  },
  {
    initialRouteName: "Home",
    headerMode: "none",
    navigationOptions: {
      headerVisible: true,
    }
  }
);

export default () =>
  <Root>
    <AppNavigator />
  </Root>;
