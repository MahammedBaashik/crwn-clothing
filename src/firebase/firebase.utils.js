import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyDp6ykhjebeR3DQyjw4WFE18EXjOMZyRAE',
    authDomain: 'crwn-db-28ad9.firebaseapp.com',
    databaseURL: 'https://crwn-db.firebaseio.com',
    projectId: 'crwn-db-28ad9',
    storageBucket: 'crwn-db-28ad9.appspot.com',
    messagingSenderId: '1050917559264',
    appId: '1:1050917559264:web:89bb387aed02d03ae72985',
    measurementId: 'G-8ZND54Q5WL'
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;