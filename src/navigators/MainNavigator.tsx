import { StackNavigationProp, createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../containers/Home/HomeScreen';
import BottomNavigator from './BottomNavigator';
import HomeBannerDetailScreen from '@/containers/Home/HomeBannerDetailScreen';

export type MainStackParamList = {
  Bottom: undefined;
  HomeScreen: undefined;
  HomeBannerDetailScreen: {
    title: string;
    url: string;
  };
};

export type MainStackNavigationProp = StackNavigationProp<MainStackParamList>;

const MainStack = createStackNavigator<MainStackParamList>();

const MainNavigator = () => {
  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }}>
      <MainStack.Screen name="Bottom" component={BottomNavigator} />
      <MainStack.Screen name="HomeBannerDetailScreen" component={HomeBannerDetailScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
