import React from 'react';
import {Provider} from 'react-redux';
import {NativeBaseProvider} from 'native-base';

import configureStore from './redux/store';
import initialState from './redux/store/initialState';
import Navigation from './navigations';
import customTheme from './config/theme';
import {PersistGate} from 'redux-persist/integration/react';

export default function App() {
  const {store, persistor} = configureStore(initialState);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NativeBaseProvider theme={customTheme}>
          <Navigation />
        </NativeBaseProvider>
      </PersistGate>
    </Provider>
  );
}
