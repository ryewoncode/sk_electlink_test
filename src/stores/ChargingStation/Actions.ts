import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchChargingStationReducer: ['params'],
  fetchChargingStationPhotoList: ['params'],
});

export const ChargingStationTypes = Types;
export default Creators;
