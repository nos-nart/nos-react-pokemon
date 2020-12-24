import React from 'react';
import { AppRoute } from './router';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <AppRoute/>
      </Provider>
    </div>
  );
}

export default App;
