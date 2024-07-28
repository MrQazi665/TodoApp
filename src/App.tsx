import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import configureStore from './redux/store';
import initialState from './redux/store/initialState';
import Navigation from './navigations';
import customTheme from './config/theme';

export default function App() {
  const {store} = configureStore(initialState);
  return (
    <Provider store={store}>
      <NativeBaseProvider theme={customTheme}>
        <Navigation />
      </NativeBaseProvider>
    </Provider>
  );
}
