import { produce } from 'immer';
import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { HomeTypes } from './Actions';

export const fetchHomeReducer = (state = INITIAL_STATE, actions: any) => {
  const { type, data } = actions.params;

  return produce(state, (draft: any) => {
    switch (type) {
      case 'bannerList': {
        draft.bannerList = data;
        break;
      }
      default:
        return draft;
    }
    return draft;
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [HomeTypes.FETCH_HOME_REDUCER]: fetchHomeReducer,
});
