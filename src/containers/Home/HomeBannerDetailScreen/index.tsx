import { BackButton, CustomHeader } from '@/components/CustomHeader';
import { MainStackParamList } from '@/navigators/MainNavigator';
import { RouteProp } from '@react-navigation/native';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import FastImage from 'react-native-fast-image';

interface HomeBannerDetailProps {
  route: RouteProp<MainStackParamList, 'HomeBannerDetailScreen'>;
}

const screenWidth = Dimensions.get('screen').width;

const HomeBannerDetailScreen = ({ route }: HomeBannerDetailProps) => {
  const { title, url } = route.params;
  return (
    <View style={styles.container}>
      <CustomHeader title="배너 상세" leftComponent={<BackButton />} />

      <View style={styles.body}>
        <Text style={styles.textTitle}>{title}</Text>
        <View style={styles.imageContainer}>
          <FastImage
            style={{ width: '100%', height: '100%' }}
            source={{ uri: url }}
            resizeMode={FastImage.resizeMode.cover}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  body: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  textTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginTop: 10,
    width: screenWidth - 40,
    height: screenWidth - 40,
  },
});

export default HomeBannerDetailScreen;
