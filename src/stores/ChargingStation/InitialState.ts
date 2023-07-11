export const INITIAL_STATE: ChargingStationState['charginStation'] = {
  photoList: [],
  photoPage: 0,
};

export interface ChargingStationState {
  charginStation: {
    photoList: any[];
    photoPage: number;
  };
}
