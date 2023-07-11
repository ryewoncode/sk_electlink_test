import { createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  fetchCommonReducer: ['params'],
  fetchInitialHandler: null,
});

export const CommonTypes = Types;
export default Creators;
