import firebase from 'firebase'

/*
    Conexion de back con front estaria aca
*/

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDq3fIs99V0k4E-MCMqn_iGtw0ghKpdTGo",
    authDomain: "clone-yt-84534.firebaseapp.com",
    projectId: "clone-yt-84534",
    storageBucket: "clone-yt-84534.appspot.com",
    messagingSenderId: "1074019927473",
    appId: "1:1074019927473:web:47c6567b0ecd97a584e990",
    measurementId: "G-MJ3KNLCJR0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider }