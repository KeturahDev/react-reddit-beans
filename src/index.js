import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import masterBeanBowlReducer from "./reducers";
import {createStore} from "redux";
import {Provider} from "react-redux";

const store = createStore(masterBeanBowlReducer);

store.subscribe(() =>
  console.log(store.getState())
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);