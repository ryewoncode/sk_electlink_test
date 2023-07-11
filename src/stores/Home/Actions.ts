import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchHomeReducer: ['params'],
  fetchHomeBannerList: ['params'],
});

export const HomeTypes = Types;
export default Creators;
