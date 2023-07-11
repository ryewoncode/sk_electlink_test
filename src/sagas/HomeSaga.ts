import { put, call } from 'redux-saga/effects';
import CommonActions from '@/stores/Common/Actions';
import HomeActions from '@/stores/Home/Actions';
import { Axios } from '@/services/Axios';

export function* fetchHomeBannerList(data: any): any {
  try {
    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: true }));

    const payload = {
      ...data,
      url: 'https://jsonplaceholder.typicode.com/photos',
    };

    const response = yield call(Axios.GET, payload);

    yield put(HomeActions.fetchHomeReducer({ type: 'bannerList', data: response }));

    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
  } catch (e) {
    yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
    console.log('#### occurred Error...fetchHomeBannerList ####');
  }
}
