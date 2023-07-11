import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '@/components/Loading';
import RootNavigator from '@/navigators/RootNavigator';
import CommonActions from '@/stores/Common/Actions';
import { CommonState } from '@/stores/Common/InitialState';

const RootScreen = () => {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: CommonState) => state.common);

  useEffect(() => {
    dispatch(CommonActions.fetchInitialHandler());
    return () => {
      dispatch(CommonActions.fetchInitialHandler());
    };
  }, []);

  return (
    <>
      <RootNavigator />
      {isLoading && <Loading />}
    </>
  );
};

export default RootScreen;
