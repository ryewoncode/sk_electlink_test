import { put, call } from 'redux-saga/effects';
import CommonActions from '@/stores/Common/Actions';
import ChargingStationActions from '@/stores/ChargingStation/Actions';
import { Axios } from '@/services/Axios';

export function* fetchChargingStationPhotoList(data: any): any {
  try {
    console.log('fetchChargingStationPhotoList######', data);
    const { page, perPage } = data.params;
    //
    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: true }));

    const params = {
      _start: page * perPage,
      _limit: perPage,
    };
    const payload = {
      params,
      url: 'https://jsonplaceholder.typicode.com/photos',
    };

    const response = yield call(Axios.GET, payload);

    if (response.length > 0) {
      yield put(
        ChargingStationActions.fetchChargingStationReducer({
          type: 'photoList',
          data: { list: response, page },
        }),
      );
    }

    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
  } catch (e) {
    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
    console.log('#### occurred Error...fetchChargingStationPhotoList ####');
  }
}
