import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import BottomNavigator from './BottomNavigator';

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <BottomNavigator />
    </NavigationContainer>
  );
};

export default RootNavigator;
