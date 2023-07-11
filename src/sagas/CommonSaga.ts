import { put } from 'redux-saga/effects';
import CommonActions from '@/stores/Common/Actions';

export function* fetchInitialHandler() {
  // 로딩 초기화
  yield put(CommonActions.fetchCommonReducer({ type: 'isLoading', data: false }));
}
