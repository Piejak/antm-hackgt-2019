import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import TimeHorizonScreen from '../screens/TimeHorizonScreen';
import RiskScreen from '../screens/RiskScreen';
import BudgetScreen from '../screens/BudgetScreen';
import SectorSelectScreen from '../screens/SectorSelectScreen';

const config = Platform.select({
    web: { headerMode: 'screen' },
    default: {},
  });

const HomeStack = createStackNavigator(
    {
      Home: {screen: HomeScreen},
      TimeHorizon: {screen: TimeHorizonScreen},
      Risk: {screen: RiskScreen},
      Budget: {screen: BudgetScreen},
      Sector: {screen: SectorSelectScreen}
    },
    {
        initialRouteName: 'Home'
    },
    config
  );

const navigationStation = createAppContainer(HomeStack);

export default navigationStation;