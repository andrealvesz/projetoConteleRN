import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';

import { Header } from '../../components/Header';

export const StatusScreen = () => {
  const { goBack } = useNavigation();
  return (
    <Container>
      <Header statusRoute title="Status" handleGoBack={() => goBack()} />
    </Container>
  );
};
