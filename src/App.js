import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import MainStacks from './routes';
import StatusBar from './components/StatusBar';

export default () => {
  return (
    <NavigationContainer>
      <StatusBar />

      <MainStacks />
    </NavigationContainer>
  );
};
