import React from 'react'
import { View, SafeAreaView, StatusBar } from 'react-native';
import MainNav from './src/navigation/AppNavigator';
// import MainNav from './src/Navigations/StackNavigation';

import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import reducers from './src/store/reducers';
// import { setNavigator } from './src/navigations/navigatioonRef';
import ReduxThunk from 'redux-thunk';
const App = () => {
  return (
    <View style={{ backgroundColor: "#F1F1F1", flex: 1 }}>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
          <MainNav
            // ref={navigator => {
            //   setNavigator(navigator);
            // }} 
            />
        </Provider>
      </SafeAreaView>
    </View>
  );
}

export default App;