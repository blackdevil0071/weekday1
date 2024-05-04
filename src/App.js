// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import JobList from './components/JobList';
import Filters from './components/Filters';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <JobList />
        {/* <Filters/> */}
      </div>
    </Provider>
  );
};

export default App;
