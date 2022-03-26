import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.View`
  flex-direction: row;
  padding: 15px;
  justify-content: space-between;
  background: ${Colors.secondary};
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

export const ButtonBack = styled.TouchableOpacity``;

export const Title = styled.Text``;
