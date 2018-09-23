import * as firebase from 'firebase';

  // Initialize Firebase
  const config = {
    apiKey: "AIzaSyD5cg86GrJtIMRqpMIiSl7O_RI45MidoZI",
    authDomain: "contact-list-5d407.firebaseapp.com",
    databaseURL: "https://contact-list-5d407.firebaseio.com",
    projectId: "contact-list-5d407",
    storageBucket: "",
    messagingSenderId: "159302081113"
  };

  export const firebaseApp = firebase.initializeApp(config);
  export const detailsRef = firebase.database().ref('details');
  export const deleteContactRef = firebase.database().ref('deletedContacts');
