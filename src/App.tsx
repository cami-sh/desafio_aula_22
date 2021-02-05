import React from 'react';

import { Provider } from 'react-redux'
import { store } from './store'

import Todos from './Components/Todos'
import User from './Components/User'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <User />
        <Todos />
      </Provider>

    </div>
  );
}

export default App;
