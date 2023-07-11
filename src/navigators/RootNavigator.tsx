import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomNavigator from './BottomNavigator';
import MainNavigator from './MainNavigator';
import { navigationRef } from '@/services/NavigationService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const RootNavigator = () => {
  const routeNameRef = React.useRef<any>();

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef.current?.getCurrentRoute()?.name;
      }}
      onStateChange={() => {
        const previousRouteName = routeNameRef.current;
        const currentRouteName = navigationRef.current?.getCurrentRoute()?.name;
        AsyncStorage.setItem('currentScreen', currentRouteName as string);

        console.log('##### currentScreen : ', currentRouteName);

        routeNameRef.current = currentRouteName;
      }}
    >
      <MainNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
