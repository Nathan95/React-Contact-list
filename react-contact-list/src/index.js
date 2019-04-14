import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Router, Route, browserHistory } from 'react-router';
import { firebaseApp } from './firebase';
import {logUser} from './actions';
import Root from 'Root';
import reducer from './reducers';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import EditContacts from './components/EditContacts'

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
  if(user) {
  //  console.log('user has signed in or up', user)
    //user is an object  from firebase
    const {email} = user;
    store.dispatch(logUser(email));
    browserHistory.push('/app');
  } else {
  //  console.log('user has signed out or still needs to sign in.')
    browserHistory.replace('/signin')
  }
})


ReactDOM.render(
  <Root>
    <Router path="/" history={browserHistory}>
      <Route path="/app" component={App} />
      <Route path="/signin" component={SignIn} />
      <Route path="/signup" component={SignUp} />
      <Route path="/edit" component={EditContacts} />
    </Router>
  </Root>, document.getElementById('root')
)
