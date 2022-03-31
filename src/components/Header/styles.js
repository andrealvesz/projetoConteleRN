import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  background: ${Colors.secondary};
`;

export const ContainerStatus = styled.View`
  flex-direction: row;
  padding: 15px;
  background: ${Colors.secondary};
  justify-content: center;
`;

export const WelcomeArea = styled.Text`
  font-size: 16px;
  color: ${Colors.fontHeader};
`;

export const StatusButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})``;

export const StatusButtonText = styled.Text`
  font-size: 16px;
  color: ${Colors.fontHeader};
`;

export const ButtonBack = styled.TouchableOpacity`
  position: absolute;
  left: 20px;
  top: 15px;
  z-index: 999;
`;

export const Title = styled.Text`
  color: ${Colors.fontHeader};
  font-size: 17px;
`;
