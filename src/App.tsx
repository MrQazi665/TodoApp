import {View, Text} from 'react-native';
import React from 'react';
import store from './redux/store';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import initialState from './redux/store/initialState';
import Navigation from './navigations';

export default function App() {
  const {store, persistor} = configureStore(initialState);
  return (
    <Navigation />
    // <Provider store={store}>
    //   <PersistGate loading={null} persistor={persistor}>
    //     <Navigation />
    //   </PersistGate>
    // </Provider>
  );
}
