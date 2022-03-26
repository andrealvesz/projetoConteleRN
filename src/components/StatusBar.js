import React from 'react';
import { StatusBar } from 'react-native';
import { Colors } from '../config/Colors';

export default () => (
  <StatusBar backgroundColor={Colors.primary} barStyle="light-content" />
);
