import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBPPdswHtKLF5vI_2fcEZrLjOx-fEVZEdw",
    authDomain: "saad-clone.firebaseapp.com",
    databaseURL: "https://saad-clone.firebaseio.com",
    projectId: "saad-clone",
    storageBucket: "saad-clone.appspot.com",
    messagingSenderId: "343005610280",
    appId: "1:343005610280:web:62061041320fc991a9501d",
    measurementId: "G-S3B80YX90F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();  //for firebase authentication

  export { db, auth} ;