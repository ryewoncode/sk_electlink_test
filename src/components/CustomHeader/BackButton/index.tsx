import React from 'react';
import { Pressable, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

const BackButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Pressable hitSlop={7} onPress={navigation.goBack}>
        <View style={{ width: 24, height: 24 }}>
          <FastImage
            style={{ width: '100%', height: '100%' }}
            source={require('@/assets/images/common/arrow/back_primary.png')}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </Pressable>
    </View>
  );
};
export default BackButton;
