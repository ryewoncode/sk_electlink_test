import { all, takeLatest } from 'redux-saga/effects';
import { CommonTypes } from '@/stores/Common/Actions';
import { HomeTypes } from '@/stores/Home/Actions';
import { ChargingStationTypes } from '@/stores/ChargingStation/Actions';
import { fetchInitialHandler } from './CommonSaga';
import { fetchHomeBannerList } from './HomeSaga';
import { fetchChargingStationPhotoList } from './ChargingStationSaga';

export default function* root() {
  yield all([
    takeLatest(CommonTypes.FETCH_INITIAL_HANDLER, fetchInitialHandler),
    takeLatest(HomeTypes.FETCH_HOME_BANNER_LIST, fetchHomeBannerList),
    takeLatest(
      ChargingStationTypes.FETCH_CHARGING_STATION_PHOTO_LIST,
      fetchChargingStationPhotoList,
    ),
  ]);
}
