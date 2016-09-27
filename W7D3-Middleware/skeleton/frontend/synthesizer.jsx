import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware } from 'redux';

import configureStore from './store/store';
import Root from './components/root';

const addLoggingToDispatch = (store) => (next) => (action) =>{
  let localStore = store.dispatch;
  console.log(store.getState());
  console.log(action);
  let returnVal = localStore(action);
  console.log(store.getState());
  return returnVal;
};

// Why won't it accept my middleware splatted?
const applyMiddlewares = (store, ...middlewares) {
  let dispatch = store.dispatch;
  middlewares.forEach((midware) => {
    dipatch = midware(store)(dispatch);
  });
  return Object.assign({}, store, { dispatch });
}


document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const rootEl = document.getElementById('root');
  const newStore = applyMiddlewares(store, addLoggingToDispatch);
  ReactDOM.render(<Root store={store} />, rootEl);
});
