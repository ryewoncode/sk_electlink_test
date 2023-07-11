import { put, call } from 'redux-saga/effects';
import CommonActions from '@/stores/Common/Actions';
import ChargingStationActions from '@/stores/ChargingStation/Actions';
import { Axios } from '@/services/Axios';

export function* fetchChargingStationPhotoList(data: any): any {
  try {
    console.log(data);

    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: true }));

    const payload = {
      ...data,
      url: 'https://jsonplaceholder.typicode.com/photos',
    };

    const response = yield call(Axios.GET, payload);

    console.log('len:: ', response.length);

    if (response.length > 0) {
      yield put(
        ChargingStationActions.fetchChargingStationReducer({ type: 'photoList', data: response }),
      );
    }

    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
  } catch (e) {
    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
    console.log('#### occurred Error...fetchChargingStationPhotoList ####');
  }
}
