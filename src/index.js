import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheckCircle, faArrowLeft, faTrashAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faGithubSquare } from '@fortawesome/free-brands-svg-icons'

import rootReducer from './reducers';
import Portfolio from './components/portfolio/App';

library.add(faCheckCircle, faArrowLeft, faTrashAlt, faEnvelope, faLinkedin, faGithubSquare);

const store = createStore(rootReducer);
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route component={Portfolio} />
      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);