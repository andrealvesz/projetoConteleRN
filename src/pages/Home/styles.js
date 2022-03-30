import styled from 'styled-components/native';
import { Colors } from '../../config/Colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  background: ${Colors.background};
`;

export const BannerArea = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 20px;
  border-bottom-width: 0.8px;
  border-color: ${Colors.fontHeader};
`;

export const TitleBannerArea = styled.View`
  margin-left: 10px;
`;

export const TitleBannerText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 5px;
  color: ${Colors.fontTitle};
`;

export const StatusApp = styled.Text`
  font-size: 14px;
  font-style: italic;
  color: ${props => props.color};
`;

export const StatusServiceArea = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 25px;
`;

export const StatusContent = styled.View``;

export const StatusText = styled.Text`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 5px;
`;

export const StatusSubText = styled.Text`
  font-size: 13px;
`;

export const CommunicationIntervalArea = styled.View``;

export const CommunicationIntervalText = styled.Text`
  padding: 0 25px;
  font-size: 15px;
  font-weight: 500;
`;

export const CommunicationIntervalTimeArea = styled.View`
  flex-direction: row;
  padding: 0 15px;
`;

export const IntervalsArea = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
  margin: 10px;
  border: ${props =>
    props.selected
      ? `1px solid ${Colors.toggle}`
      : `1px solid ${Colors.fontTitle}`};
  border-radius: 4px;
  elevation: 2;
  background: ${props =>
    props.bgColor ? Colors.intervalSelected : Colors.background};
`;

export const Intervals = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.fontTitle};
`;
