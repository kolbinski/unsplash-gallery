import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {
  UnsplashGallery,
} from './containers';
import reducers from './reducers';

class App extends Component {

  render() {
    let middleware = compose(applyMiddleware(thunk));
    if (window.__REDUX_DEVTOOLS_EXTENSION__) {
      middleware = compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__());
    }
    const store = createStore(combineReducers(reducers), middleware);
    return (
      <Provider store={store}>
        <UnsplashGallery />
      </Provider>
    );
  }
}

export default App;
