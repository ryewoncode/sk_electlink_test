export const INITIAL_STATE: HomeState['home'] = {
  bannerList: [],
};

export interface HomeState {
  home: {
    bannerList: any[];
  };
}
