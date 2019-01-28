import React, { Component } from 'react';
import './App.css';
import router from './router'
import myStore from './store'
import {Provider} from 'react-redux'
import {HashRouter} from 'react-router-dom'


class App extends Component {
  
  render() {
    return (
      <Provider store={myStore}>
        <div>
          <HashRouter>
            { router }
          </HashRouter>
        </div>
      </Provider>
    );
  }
}

export default App;