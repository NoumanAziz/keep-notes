import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'


  var firebaseConfig = {
    apiKey: "AIzaSyAUa1Yocwj29IDl3uPSpnTM6Wici1ELGhk",
    authDomain: "ever-notes.firebaseapp.com",
    databaseURL: "https://ever-notes.firebaseio.com",
    projectId: "ever-notes",
    storageBucket: "ever-notes.appspot.com",
    messagingSenderId: "19951681822",
    appId: "1:19951681822:web:fbde1a9be9ac924b65890f",
    measurementId: "G-TMCF4YFPE0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.firestore.settings({ timestampsInSnapshots : true });
firebase.firestore();

  export default firebase;





