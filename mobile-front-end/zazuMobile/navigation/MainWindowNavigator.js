import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';
import TimeHorizonScreen from '../screens/TimeHorizonScreen';
import RiskScreen from '../screens/RiskScreen';
import BudgetScreen from '../screens/BudgetScreen';
import VerifyScreen from '../screens/VerifyInfo';
import WaitScreen from '../screens/WaitScreen';
import WaitScreen2 from '../screens/WaitScreen2';
import PortfolioScreen from '../screens/PortfolioScreen'
import PerformanceScreen from '../screens/PerformanceScreen'
import EmailScreen from '../screens/EmailScreen'

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
      Verify: {screen: VerifyScreen},
      WaitMe: {screen: WaitScreen},
      LoadMe: {screen: WaitScreen2},
      Portfolio: {screen: PortfolioScreen},
      Performance: {screen: PerformanceScreen},
      Email: {screen: EmailScreen}
    },
    {
        initialRouteName: 'Home'
    },
    config
  );

const navigationStation = createAppContainer(HomeStack);

export default navigationStation;