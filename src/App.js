import Home from './screens/Home/Home';
import {createAppContainer} from 'react-navigation';
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch';
import StartScreen from './screens/StartScreen/StartScreen';
import {Transition} from 'react-native-reanimated';
import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';

const AppNavigatorSwitch = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: 'SET CONFIG DRAW',
      },
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#61d2dc',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  },
);

const AppNavigator = createAnimatedSwitchNavigator(
  {
    App: {
      screen: AppNavigatorSwitch,
    },
    StartScreen: {
      screen: StartScreen,
    },
  },
  {
    transition: (
      <Transition.Together>
        <Transition.Out type="fade" durationMs={300} interpolation="easeIn" />
        <Transition.In type="fade" durationMs={500} />
      </Transition.Together>
    ),
    initialRouteName: 'StartScreen',
  },
);

export default createAppContainer(AppNavigator);
