import React, { useState } from 'react';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import Home from './components/home';
import Detail from './components/detail';

const AppNavigator = createStackNavigator({
  'Edible THC Calculator': {screen: Home},
  'Description': {screen: Detail},
})

const App = createAppContainer(AppNavigator);

export default App;