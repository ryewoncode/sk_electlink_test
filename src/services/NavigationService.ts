import React from 'react';
import { CommonActions, NavigationContainerRef, StackActions } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MainStackParamList } from '@/navigators/MainNavigator';

export const navigationRef = React.createRef<NavigationContainerRef<MainStackParamList>>();

export const navigate = (
  name: keyof MainStackParamList,
  params?: MainStackParamList[keyof MainStackParamList],
) => {
  AsyncStorage.setItem('currentScreen', name);

  navigationRef.current?.navigate(name, params);
};

export function navigateReplace(name: string, params?: any) {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
}

export function navigateGoBack() {
  navigationRef.current?.goBack();
}

export function navigateAndReset(name: string) {
  navigationRef.current?.dispatch((state) => {
    // const tempRoutes = [];
    // eslint-disable-next-line array-callback-return,consistent-return
    const routes = state.routes.filter((r) => {
      if (r.name === 'Bottom') {
        return r;
      }
      if (r.name === name) {
        return r;
      }
    });
    return CommonActions.reset({
      ...state,
      routes,
      index: routes.length - 1,
    });
  });
}

export function navigateAndSimpleReset(name: string, index = 0) {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index,
      routes: [{ name }],
    }),
  );
}
