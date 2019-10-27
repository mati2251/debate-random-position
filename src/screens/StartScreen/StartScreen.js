import React from 'react';
import {View, Image} from 'react-native';
import image from '../../assets/logo.png';
import style from './style';

const StartScreen = props => {
  setTimeout(() => props.navigation.navigate('App'), 1000);
  return (
    <View style={style.container}>
      <Image source={image} style={style.logo} />
    </View>
  );
};

export default StartScreen;
