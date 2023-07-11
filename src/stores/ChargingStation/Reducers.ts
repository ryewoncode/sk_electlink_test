import { produce } from 'immer';
import { INITIAL_STATE } from './InitialState';
import { createReducer } from 'reduxsauce';
import { ChargingStationTypes } from './Actions';

export const fetchChargingStationReducer = (state = INITIAL_STATE, actions: any) => {
  const { type, data } = actions.params;

  return produce(state, (draft: any) => {
    switch (type) {
      case 'photoListInit': {
        draft.photoList = INITIAL_STATE.photoList;
        draft.photoPage = INITIAL_STATE.photoPage;

        break;
      }
      case 'photoList': {
        if (draft.photoPage === 0) {
          draft.photoList = data;
        } else {
          draft.photoList = [...draft.photoList, ...data];
        }
        draft.photoPage++;

        break;
      }
      default:
        return draft;
    }
    return draft;
  });
};

export const reducer = createReducer(INITIAL_STATE, {
  [ChargingStationTypes.FETCH_CHARGING_STATION_REDUCER]: fetchChargingStationReducer,
});
