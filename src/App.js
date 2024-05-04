// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobList from './components/JobList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <JobList />
      </div>
    </Provider>
  );
};

export default App;
