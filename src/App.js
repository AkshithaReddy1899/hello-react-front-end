import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import store from './redux/configureStore';
import './App.css';
import Greeting from './Component/Greeting';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <Greeting/> }/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
