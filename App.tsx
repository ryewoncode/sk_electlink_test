import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { Provider } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Lottie from 'lottie-react-native';
import createStore from '@/stores';
import { PersistGate } from 'redux-persist/lib/integration/react';
import Loading from '@/components/Loading';
import RootScreen from '@/containers/Root/RootScreen';

const { store, persistor } = createStore();

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <RootScreen />
      </PersistGate>
    </Provider>
  );
};

export default App;
