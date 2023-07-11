import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, useWindowDimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CustomHeader } from '@/components/CustomHeader';
import { useIsFocused } from '@react-navigation/native';
import { ChargingStationState } from '@/stores/ChargingStation/InitialState';
import ChargingStationActions from '@/stores/ChargingStation/Actions';
import { FlatList } from 'react-native-gesture-handler';
import FastImage from 'react-native-fast-image';

const ChargingStationScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { width } = useWindowDimensions();

  const { photoList, photoPage } = useSelector(
    (state: ChargingStationState) => state.charginStation,
  );

  useEffect(() => {
    if (isFocused) {
      getPhotoList();
    } else {
      dispatch(ChargingStationActions.fetchChargingStationReducer({ type: 'photoListInit' }));
    }
  }, [isFocused]);

  const getPhotoList = () => {
    const params = {
      _start: photoPage,
      _limit: 10,
    };
    dispatch(ChargingStationActions.fetchChargingStationPhotoList(params));
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={'충전소'} />
      <View style={styles.body}>
        <Text style={styles.sectionTitle}>세로 무한스크롤 구현 화면</Text>
        <FlatList
          contentContainerStyle={{
            flexGrow: 1,
            marginTop: 10,
          }}
          data={photoList || []}
          renderItem={({ item }) => (
            <Pressable style={{ marginBottom: 20 }}>
              <View
                style={{
                  width: width - 40,
                  height: ((width - 40) / 5) * 3,
                  borderRadius: 12,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <FastImage
                  style={{ width: '100%', height: '100%', borderRadius: 12 }}
                  source={{ uri: item?.url || '' }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
              <Text>{`albumId: ${item?.albumId || ''}`}</Text>
              <Text>{`id: ${item?.id || ''}`}</Text>
              <Text>{`title: ${item?.title || ''}`}</Text>
            </Pressable>
          )}
          keyExtractor={(item, index) => index.toString()}
          initialNumToRender={10}
          maxToRenderPerBatch={13}
          windowSize={7}
          showsVerticalScrollIndicator={false}
          refreshing={false}
          onRefresh={() => getPhotoList()}
          onEndReached={() => getPhotoList()}
          ListEmptyComponent={() => (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text>데이터가 없습니다.</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  body: { flex: 1, marginTop: 20, paddingHorizontal: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '500' },
});

export default ChargingStationScreen;
