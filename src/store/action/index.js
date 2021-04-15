import AsyncStorage from '@react-native-async-storage/async-storage';

import { navigate } from '../../navigations/navigationRef';

// console.log('saasa')

export const ClearErrorMsg = () => {
  return dispatch => {
    dispatch({ type: 'AddErrorD', payload: '' });
    dispatch({ type: 'AddErrorL', payload: '' });
    dispatch({ type: 'AddErrorR', payload: '' });

  }
}
export const AddErrorMsg = (message) => {
  return dispatch => {
    dispatch({ type: 'AddErrorD', payload: message });
    dispatch({ type: 'AddErrorL', payload: message });
    dispatch({ type: 'AddErrorC', payload: message });
    dispatch({ type: 'AddErrorR', payload: message });
    setTimeout(() => {
      dispatch(ClearErrorMsg());
    }, 1000);
  }
}
export const AddUserMsg = (message) => {
  return dispatch => {
    dispatch({ type: 'AddMessageD', payload: message });

    dispatch({ type: 'AddMessageL', payload: message });
    dispatch({ type: 'AddMessageR', payload: message });

    setTimeout(() => {
      dispatch(ClearUserMsg());
    }, 5000);
  }
}
export const ClearUserMsg = () => {
  return dispatch => {
    dispatch({ type: 'AddMessageD', payload: '' });
    dispatch({ type: 'AddMessageL', payload: '' });
    dispatch({ type: 'AddMessageR', payload: message });
  }
}

export const ShowLoader = () => {
  return dispatch => {
    dispatch({ type: 'AddLoaderD', payload: true });
    dispatch({ type: 'AddLoaderL', payload: true });
    dispatch({ type: 'AddLoaderC', payload: true });
    dispatch({ type: 'AddLoaderR', payload: true });
  }
}
export const HideLoader = () => {
  return dispatch => {
    dispatch({ type: 'AddLoaderD', payload: false });
    dispatch({ type: 'AddLoaderL', payload: false });
    dispatch({ type: 'AddLoaderC', payload: false });
    dispatch({ type: 'AddLoaderR', payload: true });
  }
};


// Login

