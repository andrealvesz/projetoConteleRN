import React from 'react';
import {
  Container,
  WelcomeArea,
  StatusButton,
  StatusButtonText,
  ButtonBack,
  Title,
} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = ({ home, statusRoute, title }) => {
  return (
    <>
      {home && (
        <Container>
          <WelcomeArea>Olá, bem-vindo</WelcomeArea>
          <StatusButton>
            <StatusButtonText>Status</StatusButtonText>
          </StatusButton>
        </Container>
      )}

      {statusRoute && (
        <Container>
          <ButtonBack>
            <MaterialCommunityIcons name="home" size={30} />
          </ButtonBack>
          <Title>{title}</Title>
        </Container>
      )}
    </>
  );
};
