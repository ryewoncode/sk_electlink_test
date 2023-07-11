import { combineReducers } from 'redux';
import rootSaga from '@/sagas';
import { reducer as CommonReducer } from './Common/Reducers';
import { reducer as HomeReducer } from './Home/Reducers';
import { reducer as ChargingStationReducer } from './ChargingStation/Reducers';
import ConfigureStore from '@/stores/CreateStore';

export default () => {
  const rootReducer = combineReducers({
    common: CommonReducer,
    home: HomeReducer,
    charginStation: ChargingStationReducer,
  });

  return ConfigureStore(rootReducer, rootSaga);
};
