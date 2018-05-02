import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import UserWelcome from './components/user_welcome';
import SessionCreate from './components/session_create';
import VideoView from './components/video_view';
import VideoAdd from './components/video_add';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/:sessionId/view" component={VideoView}/>
          <Route path="/:sessionId/add" component={VideoAdd}/>
          <Route path="/" component={UserWelcome}/>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
