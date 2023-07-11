import {
  BottomTabDescriptorMap,
  BottomTabNavigationEventMap,
} from '@react-navigation/bottom-tabs/lib/typescript/src/types';
import { NavigationHelpers, ParamListBase, TabNavigationState } from '@react-navigation/native';
import React from 'react';
import { TouchableOpacity, View, Text, Platform } from 'react-native';
import { getBottomSpace, isIphoneX } from 'react-native-iphone-x-helper';
import { DATA_MENUS } from './data';
import FastImage from 'react-native-fast-image';

interface TabBarProps {
  state: TabNavigationState<ParamListBase>;
  descriptors: BottomTabDescriptorMap;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
}

const TAB_BAR_SIZE = Platform.select({
  android: 64,
  ios: isIphoneX() ? getBottomSpace() + 64 : 64,
});

const CustomTabBar = (props: TabBarProps) => {
  const { state, descriptors, navigation } = props;

  const renderIcon = <T extends React.ReactNode>(type: T) => {
    const menuIndex = DATA_MENUS.findIndex((menu, index) => menu.screen === type);
    const menuInfo = DATA_MENUS[menuIndex];

    const imageSource =
      menuInfo.screen === type && menuInfo.idx === state.index
        ? menuInfo.activeIcon
        : menuInfo.icon;

    return imageSource || undefined;
  };

  return (
    <View
      style={{ backgroundColor: state.index === 0 || state.index === 1 ? 'white' : 'transparent' }}
    >
      <View
        style={{
          paddingTop: 7,
          borderTopRightRadius: state.index !== 1 ? 20 : 0,
          borderTopLeftRadius: state.index !== 1 ? 20 : 0,
          backgroundColor: '#fff',
          // backgroundColor: 'green',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          width: '100%',
          height: TAB_BAR_SIZE,
          paddingHorizontal: 8,
        }}
      >
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: 'tabLongPress',
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.name}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={{ flexGrow: 1 }}
            >
              <View style={{ alignItems: 'center' }}>
                <View style={{ width: 32, height: 32 }}>
                  <FastImage
                    source={renderIcon(route.name)}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode={FastImage.resizeMode.cover}
                  />
                </View>
                <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                  <Text style={{ color: isFocused ? '#101214' : '#81868f' }}>
                    {DATA_MENUS[index].text}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default CustomTabBar;
