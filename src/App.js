import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MainStacks from './routes';
import StatusBar from './components/StatusBar';
import { Home } from './pages/Home';

export default () => {
  return (
    <NavigationContainer>
      <StatusBar />
      <Home />
      {/* <MainStacks /> */}
    </NavigationContainer>
  );
};
