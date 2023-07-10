import React from 'react';
import { Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import Lottie from 'lottie-react-native';
import RootNavigator from '@/navigators/RootNavigator';

const App = () => {
  return (
    <>
      <RootNavigator />
    </>
    // <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    //   <Text>테스트</Text>
    //   <Lottie source={require('@/assets/lottie/Lottie.json')} autoPlay loop />
    // </View>
  );
};

export default App;
