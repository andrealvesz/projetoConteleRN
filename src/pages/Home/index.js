import React, { useState } from 'react';

import {
  Container,
  BannerArea,
  TitleBannerArea,
  TitleBannerText,
  StatusApp,
  StatusText,
  StatusSubText,
  StatusServiceArea,
  StatusContent,
  CommunicationIntervalArea,
  CommunicationIntervalText,
  CommunicationIntervalTimeArea,
  IntervalsArea,
  Intervals,
} from './styles';
import { Colors } from '../../config/Colors';

import { Header } from '../../components/Header';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NativeBaseProvider, Switch } from 'native-base';

export const Home = () => {
  const [intervalSelected, setIntervalSelected] = useState('10s');

  return (
    <NativeBaseProvider>
      <Container>
        <Header home />

        <BannerArea>
          <MaterialCommunityIcons
            name="cellphone-marker"
            size={40}
            color={Colors.primary}
          />
          <TitleBannerArea>
            <TitleBannerText>My GPS - Tracking</TitleBannerText>
            <StatusApp>Online</StatusApp>
          </TitleBannerArea>
        </BannerArea>

        <StatusServiceArea>
          <StatusContent>
            <StatusText>Status do serviço</StatusText>
            <StatusSubText>Serviço ativo</StatusSubText>
          </StatusContent>
          <Switch
            size="md"
            offTrackColor={Colors.offTrackToggle}
            onTrackColor={Colors.trackToggle}
            onThumbColor={Colors.toggle}
            offThumbColor={Colors.offToggle}
          />
        </StatusServiceArea>

        <CommunicationIntervalArea>
          <CommunicationIntervalText>
            Intervalo de comunicação
          </CommunicationIntervalText>
          <CommunicationIntervalTimeArea>
            <IntervalsArea
              onPress={() => setIntervalSelected('10s')}
              bgColor={intervalSelected === '10s' ? true : false}
              selected={intervalSelected === '10s' ? true : false}>
              <Intervals>10s</Intervals>
            </IntervalsArea>

            <IntervalsArea
              onPress={() => setIntervalSelected('5s')}
              bgColor={intervalSelected === '5s' ? true : false}
              selected={intervalSelected === '5s' ? true : false}>
              <Intervals>5s</Intervals>
            </IntervalsArea>

            <IntervalsArea
              onPress={() => setIntervalSelected('3s')}
              bgColor={intervalSelected === '3s' ? true : false}
              selected={intervalSelected === '3s' ? true : false}>
              <Intervals>3s</Intervals>
            </IntervalsArea>

            <IntervalsArea
              onPress={() => setIntervalSelected('1s')}
              bgColor={intervalSelected === '1s' ? true : false}
              selected={intervalSelected === '1s' ? true : false}>
              <Intervals>1s</Intervals>
            </IntervalsArea>
          </CommunicationIntervalTimeArea>
        </CommunicationIntervalArea>
      </Container>
    </NativeBaseProvider>
  );
};
