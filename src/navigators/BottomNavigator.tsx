import { BottomTabBarProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { View } from 'react-native';
import StoreScreen from '@/containers/Store/StoreScreen';
import ChargingStationScreen from '@/containers/ChargingStation/ChargingStationScreen';
import HomeScreen from '@/containers/Home/HomeScreen';
import MyScreen from '@/containers/My/MyScreen';
import TotalScreen from '@/containers/Total/TotalScreen';
import CustomTabBar from './CustomTabBar';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => (
  <View style={{ flex: 1, backgroundColor: 'transparent' }}>
    <Tab.Navigator
      backBehavior="none"
      tabBar={(props: BottomTabBarProps) => <CustomTabBar {...props} />}
      initialRouteName="HomeScreen"
    >
      <Tab.Screen name="StoreScreen" component={StoreScreen} />
      <Tab.Screen name="ChargingStationScreen" component={ChargingStationScreen} />
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="MyScreen" component={MyScreen} />
      <Tab.Screen name="TotalScreen" component={TotalScreen} />
    </Tab.Navigator>
  </View>
);

export default BottomNavigator;
