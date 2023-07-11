import { produce } from 'immer';
import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { CommonTypes } from './Actions';
export const fetchCommonReducer = (state = INITIAL_STATE, actions: any) => {
  const { type, data } = actions.params;

  return produce(state, (draft: any) => {
    switch (type) {
      case 'isLoading': {
        draft.isLoading = data;
        break;
      }
      default:
        return draft;
    }
    return draft;
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [CommonTypes.FETCH_COMMON_REDUCER]: fetchCommonReducer,
});
