import React from 'react';
import configureStore from './redux/store';
import {Provider} from 'react-redux';
import initialState from './redux/store/initialState';
import Navigation from './navigations';
import {NativeBaseProvider} from 'native-base';
import customTheme from './config/theme';

export default function App() {
  const {store, persistor} = configureStore(initialState);
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}
