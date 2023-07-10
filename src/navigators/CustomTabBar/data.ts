import { ImageRequireSource } from 'react-native';
import { Source } from 'react-native-fast-image';

export const DATA_MENUS: Array<{
  idx: number;
  screen: string;
  key: KeyType;
  text: string;
  icon: Source | ImageRequireSource;
  activeIcon: Source | ImageRequireSource;
}> = [
  {
    idx: 0,
    key: 'store',
    screen: 'StoreScreen',
    text: '스토어',
    icon: require('@/assets/images/BottomTabBar/shop.png'),
    activeIcon: require('@/assets/images/BottomTabBar/shop_active.png'),
  },
  {
    idx: 1,
    key: 'chargingStation',
    screen: 'ChargingStationScreen',
    text: '충전소',
    icon: require('@/assets/images/BottomTabBar/charger.png'),
    activeIcon: require('@/assets/images/BottomTabBar/charger_active.png'),
  },
  {
    idx: 2,
    key: 'home',
    screen: 'HomeScreen',
    text: '홈',
    icon: require('@/assets/images/BottomTabBar/home.png'),
    activeIcon: require('@/assets/images/BottomTabBar/home_active.png'),
  },
  {
    idx: 3,
    key: 'my',
    screen: 'MyScreen',
    text: '나',
    icon: require('@/assets/images/BottomTabBar/profile.png'),
    activeIcon: require('@/assets/images/BottomTabBar/profile_active.png'),
  },
  {
    idx: 4,
    key: 'total',
    screen: 'TotalScreen',
    text: '전체',
    icon: require('@/assets/images/BottomTabBar/menu.png'),
    activeIcon: require('@/assets/images/BottomTabBar/menu_selected_active.png'),
  },
];

type KeyType = 'store' | 'chargingStation' | 'home' | 'my' | 'total';
