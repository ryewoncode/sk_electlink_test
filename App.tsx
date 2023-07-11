import React, { useEffect, useState } from 'react';
import { Animated, StatusBar, Text, View, useWindowDimensions } from 'react-native';
import { Provider } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Lottie from 'lottie-react-native';
import createStore from '@/stores';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Loading from '@/components/Loading';
import RootScreen from '@/containers/Root/RootScreen';
import AnimatedLottieView from 'lottie-react-native';

const { store, persistor } = createStore();

const App = () => {
  const { width } = useWindowDimensions();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(false);
    }, 7000);
  }, []);

  return isVisible ? (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Lottie
        source={require('@/assets/lottie/Lottie.json')}
        autoPlay
        loop={false}
        resizeMode={'center'}
        imageAssetsFolder={'images'}
      />
    </View>
  ) : (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
