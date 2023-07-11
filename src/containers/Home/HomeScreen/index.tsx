import React, { createRef, useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Pressable,
  ViewToken,
  Platform,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useIsFocused } from '@react-navigation/native';
import { CustomHeader } from '@/components/CustomHeader';
import { FlatList } from 'react-native-gesture-handler';
import HomeActions from '@/stores/Home/Actions';
import { HomeState } from '@/stores/Home/InitialState';
import FastImage from 'react-native-fast-image';
import { navigate } from '@/services/NavigationService';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const { width } = useWindowDimensions();
  const { bannerList } = useSelector((state: HomeState) => state.home);

  const flatRef = createRef<any>();

  const [transList, setTransList] = useState<Array<any>>(bannerList);
  const [intervalToggle, setIntervalToggle] = useState(true);
  const [page, setPage] = useState<number>(0);

  const perPage = transList?.length || 0;
  let intervalId: any;

  useEffect(() => {
    updatePage();
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (isFocused) dispatch(HomeActions.fetchHomeBannerList({ _start: 0, _limit: 5 }));
  }, [isFocused]);

  useEffect(() => {
    if (bannerList?.length === 1) return;
    if (intervalToggle && flatRef) {
      if (page === transList.length - 1) {
        const arr = [...transList, ...bannerList];
        setTransList(arr);
      }
      if (page >= perPage) {
        setPage(0);
      } else {
        flatRef?.current?.scrollToIndex({ index: page, animated: true });
      }
    }
  }, [page]);

  useEffect(() => {
    if (intervalToggle && intervalId) {
      updatePage();
    } else {
      clearInterval(intervalId);
    }
  }, [intervalToggle]);

  const getItemLayout = (data: any, index: any) => {
    return { length: width - 40, offset: (width - 40) * index, index };
  };

  const onViewableItemsChanged = React.useRef(
    (info: { viewableItems: Array<ViewToken>; changed: Array<ViewToken> }) => {
      if (info.changed) {
        const tempIdx: number = info.changed[0]?.index || page;
        setPage(tempIdx);
        setIntervalToggle(true);
      }
    },
  );

  const updatePage = () => {
    if (!intervalId) {
      intervalId = setInterval(tick, 5000);
    }
  };

  const tick = () => {
    if (intervalToggle && flatRef) {
      setPage((state) => {
        return state + 1;
      });
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader title={'홈'} />
      <View style={{ borderRadius: 20, marginTop: 20, marginHorizontal: 20 }}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.sectionTitle}>배너 영역</Text>
        </View>

        <FlatList
          ref={flatRef}
          data={transList}
          renderItem={({ item }) => (
            <Pressable
              onPress={() => {
                navigate('HomeBannerDetailScreen', { url: item.url, title: item.title });
              }}
            >
              <View
                style={{
                  width: width - 40,
                  height: (width - 40) * 0.2,
                  backgroundColor: '#FFFF',
                  borderRadius: 20,
                }}
              >
                <FastImage
                  style={{ width: '100%', height: '100%', borderRadius: 20 }}
                  source={{ uri: item.thumbnailUrl || '' }}
                  resizeMode={FastImage.resizeMode.cover}
                />
              </View>
            </Pressable>
          )}
          keyExtractor={(xItem, xIndex) => xIndex.toString()}
          initialNumToRender={3}
          maxToRenderPerBatch={4}
          windowSize={7}
          pagingEnabled
          horizontal
          disableIntervalMomentum
          decelerationRate="fast"
          snapToInterval={width - 40}
          showsHorizontalScrollIndicator={false}
          snapToAlignment={'start'}
          // getItemLayout={getItemLayout}
          onViewableItemsChanged={onViewableItemsChanged?.current}
          scrollEnabled={bannerList?.length > 1}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
        />
        <View style={{ marginTop: 5 }}>
          <Text>배너 클릭 시, 상세 페이지로 이동 가능합니다.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },
  sectionTitle: { fontSize: 16, fontWeight: '500' },
});

export default HomeScreen;
