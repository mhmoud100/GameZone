import React, { useState } from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Navigator from './routes/homeStack'
import ApiKeys from './constants/ApiKeys'
import Home from './components/Home'
import * as firebase from 'firebase'
export default function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  if (!firebase.apps.length) {
    firebase.initializeApp(ApiKeys.FirebaseConfig)
  }
  firebase.auth().onAuthStateChanged(function (user) {
    setIsAuthenticated(!!user)
  })


  return (
    <TouchableWithoutFeedback>
      {(isAuthenticated) ? <Home /> : <Navigator />}
    </TouchableWithoutFeedback>
  );
}


