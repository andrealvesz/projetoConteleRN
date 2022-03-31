import React from 'react';
import { Colors } from '../../config/Colors';
import {
  Container,
  ContainerStatus,
  WelcomeArea,
  StatusButton,
  StatusButtonText,
  ButtonBack,
  ButtonText,
  Title,
} from './styles';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export const Header = ({
  home,
  statusRoute,
  title,
  handleStatus,
  handleGoBack,
}) => {
  return (
    <>
      {home && (
        <Container>
          <WelcomeArea>Olá, bem-vindo</WelcomeArea>
          <StatusButton onPress={handleStatus}>
            <StatusButtonText>Status</StatusButtonText>
          </StatusButton>
        </Container>
      )}

      {statusRoute && (
        <ContainerStatus>
          <ButtonBack onPress={handleGoBack}>
            <MaterialCommunityIcons
              name="chevron-left"
              size={25}
              color={Colors.fontHeader}
            />
          </ButtonBack>
          <Title>{title}</Title>
        </ContainerStatus>
      )}
    </>
  );
};
