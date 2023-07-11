export const INITIAL_STATE: CommonState['common'] = {
  isLoading: false,
};

export interface CommonState {
  common: {
    isLoading: boolean | false;
  };
}
